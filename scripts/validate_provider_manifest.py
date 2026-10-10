#!/usr/bin/env python3
"""Validate an optional Design Provider manifest; this never proves Skill installation."""
import json
import sys
from pathlib import Path

CAPABILITIES = {"visual-spec", "component-mapping", "tokens", "themes", "motion",
                "style-audit", "implementation", "style-candidate"}
LEVELS = {"native", "adapted", "guidance"}


def validate(path: Path):
    doc = json.loads(path.read_text(encoding="utf-8"))
    assert isinstance(doc, dict), "root must be object"
    assert doc.get("contract_version") == "1.0", "unsupported contract version"
    for field in ("provider_id", "display_name", "entry"):
        assert isinstance(doc.get(field), str) and doc[field].strip(), f"missing {field}"
    assert doc["entry"] == "SKILL.md", "entry must point to original SKILL.md"
    for field in ("design_families", "capabilities", "surfaces"):
        values = doc.get(field)
        assert isinstance(values, list) and values and all(isinstance(v, str) and v.strip() for v in values), f"invalid {field}"
        assert len(values) == len(set(values)), f"duplicate {field}"
    assert set(doc["capabilities"]) <= CAPABILITIES, "unknown capability"
    frameworks = doc.get("framework_support")
    assert isinstance(frameworks, list) and frameworks, "framework_support required"
    names = set()
    for item in frameworks:
        assert isinstance(item, dict) and isinstance(item.get("name"), str) and item["name"], "framework name missing"
        assert item.get("level") in LEVELS, "invalid framework support"
        assert item["name"] not in names, "duplicate framework"
        names.add(item["name"])
    print("PASS:", path)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: python3 scripts/validate_provider_manifest.py path/to/design-provider.json")
    try:
        validate(Path(sys.argv[1]))
    except (ValueError, OSError, AssertionError) as exc:
        raise SystemExit(f"FAIL: {exc}")
