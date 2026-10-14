#!/usr/bin/env python3
"""Copy the local planning kit into an empty project directory without overwriting."""
import argparse
from pathlib import Path
import shutil
import sys


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, required=True, help='New or empty prototype directory')
    args = parser.parse_args()
    source = Path(__file__).resolve().parents[1] / 'assets' / 'gray-prototype'
    target = args.output.expanduser().resolve()
    if not source.is_dir():
        parser.error('Bundled gray-prototype assets are missing.')
    if target == source or source in target.parents or target in source.parents:
        parser.error('Choose an output outside the bundled assets.')
    if target.exists() and (not target.is_dir() or any(target.iterdir())):
        parser.error(f'Output must be new or empty; nothing overwritten: {target}')
    shutil.copytree(source, target, dirs_exist_ok=True)
    print(f'Created: {target / "index.html"}')
    print('Replace example.js with the approved project pages, data and flows.')
    print('Open index.html directly or serve this directory locally. No dependencies to install.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
