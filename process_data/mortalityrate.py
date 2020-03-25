import json


country_list_data = json.loads(open("../country-by-abbreviation.json").read())
name_to_code = {}

for c in country_list_data:
    name_to_code[c["country"].lower()] = c["abbreviation"].lower()

raw = open("mortality-per-country-2017.txt").read().strip()

lines = raw.split("\n")
# print(lines)

countries = {}

for line in lines:
    splitted = line.split()
    country_name = " ".join(splitted[1:-1]).lower()
    rate = float(splitted[-1])
    if country_name not in name_to_code:
        continue

    countries[name_to_code[country_name]] = rate

    # print(country_name, rate)

out = open("./mortality-rate-per-country-2017.json", "w")
out.write(json.dumps(countries, indent=2))
out.close()
