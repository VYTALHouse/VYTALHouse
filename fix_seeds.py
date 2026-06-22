import os
import json
from datetime import datetime

seed_dir = "data/seeds"
schema_fields = {"id", "entity", "type", "name", "status", "owner", "updatedAt"}

for filename in os.listdir(seed_dir):
    if not filename.endswith(".json"): continue
    path = os.path.join(seed_dir, filename)
    with open(path, "r") as f:
        try:
            data = json.load(f)
        except:
            continue
            
    if not isinstance(data, list):
        continue
        
    new_data = []
    for item in data:
        new_item = {
            "id": item.get("id", f"gen-{hash(str(item))}"),
            "entity": item.get("entity", "VYTAL House"),
            "type": item.get("type", filename.replace(".json", "")),
            "name": item.get("name", "Unnamed"),
            "status": item.get("status", "draft"),
            "owner": item.get("owner", "admin"),
            "updatedAt": item.get("updatedAt", datetime.now().strftime("%Y-%m-%d")),
            "metadata": item.get("metadata", {})
        }
        
        # move non-schema fields to metadata
        for k, v in item.items():
            if k not in schema_fields and k != "metadata":
                new_item["metadata"][k] = v
                
        new_data.append(new_item)
        
    with open(path, "w") as f:
        json.dump(new_data, f, indent=2)

print("Fixed seeds schema.")
