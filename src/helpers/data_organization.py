import json

with open('../../../ca-hospitalizations.csv', 'r') as infile:
    data = infile.read()

#get data as list
data_list = data.splitlines()

#create key list
keys = data_list[0].split(',')

#create new data list
data_list = data_list[1:]

#create dictionary with date as outter most keys
dict_by_dates = {}

for item in data_list:
    #split cvs string into list
    contents = item.split(',')

    date_string = contents[1]
    county_name = contents[0]
    values = contents[2:]

    #populate new dictionary
    new_dict = list_to_dict(keys, values)

    if date_string in dict_by_dates:
        dict_by_dates[date_string][county_name] = new_dict
    else:
        dict_by_dates[date_string] = {county_name: new_dict}



serialized_data = json.dumps(dict_by_dates)
with open('hospitals.json', 'w') as outfile:
    outfile.write(serialized_data)

def list_to_dict(keys: list(str), values: list(any)) -> dict:
    """Takes two lists as args, one list of key strings, and a second list of 
    corresponding values, and maps them into a dictionary as key-value pairs, 
    finally returning that dictionary."""
    new_dict = {}
    for i in range(0, len(keys)):
        new_dict[keys[i]] = values[i]
        i+=1
    return new_dict

def serialize(obj: dict) -> str:
    """Takes JSON obj as arg, and returns serialized string version"""
    serialized_data = json.dumps(dict_by_dates)
    return serialized_data