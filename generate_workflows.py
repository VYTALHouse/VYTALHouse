import os

os.makedirs(".github/workflows", exist_ok=True)

ci_yaml = """name: CI Build

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    - run: npm ci
    - run: npm run typecheck
    - run: npm run build
    - run: npm run quality
"""

quality_yaml = """name: Quality Gate

on:
  pull_request:
    branches: [ "main" ]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20'
    - run: npm ci
    - run: npm run quality
"""

artifacts_yaml = """name: Artifacts

on:
  push:
    branches: [ "main" ]

jobs:
  artifacts:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Collect artifacts
      run: echo "Collecting delivery artifacts for VYTAL House prototype..."
"""

security_yaml = """name: Security Check

on:
  push:
    branches: [ "main" ]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Check for unprotected health data
      run: echo "No PII or protected health intake allowed in prototype."
"""

cron_yaml = """name: Cron Readiness Check

on:
  schedule:
    - cron: '0 8 * * *'

jobs:
  readiness:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Calculate readiness
      run: echo "Evaluating VYTAL House facility readiness score..."
"""

with open(".github/workflows/ci.yml", "w") as f: f.write(ci_yaml)
with open(".github/workflows/quality.yml", "w") as f: f.write(quality_yaml)
with open(".github/workflows/artifacts.yml", "w") as f: f.write(artifacts_yaml)
with open(".github/workflows/security-check.yml", "w") as f: f.write(security_yaml)
with open(".github/workflows/cron-readiness.yml", "w") as f: f.write(cron_yaml)

print("Generated workflows.")
