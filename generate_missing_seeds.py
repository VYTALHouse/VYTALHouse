import os
import json
from datetime import datetime

seed_dir = "data/seeds"
required_seeds = [
    "services.json", "memberships.json", "vendors.json", "launchGoals.json",
    "riskRegister.json", "bookings.json", "auditEvents.json", "contentItems.json",
    "socialPosts.json", "portalUsers.json", "qualityScores.json", "integrations.json",
    "ownershipFormation.json", "complianceTasks.json", "capitalReadiness.json",
    "facilityZones.json", "equipmentProcurement.json", "permitsAndReview.json"
]

for seed in required_seeds:
    path = os.path.join(seed_dir, seed)
    if not os.path.exists(path):
        data = [{
            "id": f"{seed.replace('.json', '')}-1",
            "entity": "VYTAL House",
            "type": seed.replace('.json', ''),
            "name": f"Sample {seed.replace('.json', '')}",
            "status": "draft",
            "owner": "admin",
            "updatedAt": datetime.now().strftime("%Y-%m-%d"),
            "metadata": {
                "description": "Auto-generated seed record"
            }
        }]
        with open(path, "w") as f:
            json.dump(data, f, indent=2)
        print(f"Created {seed}")

print("Missing seeds generated.")
