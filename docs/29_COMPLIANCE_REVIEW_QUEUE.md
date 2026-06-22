# 29_COMPLIANCE_REVIEW_QUEUE

## Mechanism
Every document or intake marked `status: "needs-review"` enters the compliance queue.
Clinical agents scan for PII/PHI leakage and red-flag inappropriate text.

## Approval Chain
1. AI Pre-scan -> 2. Admin Review -> 3. Clinical Sign-off
