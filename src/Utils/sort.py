# sort.py
import sys
import json

if __name__ == "__main__":
    unsorted_list = json.loads(sys.argv[1])
    sorted_list = sorted(unsorted_list)
    print(json.dumps(sorted_list))
