const data = [
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["pioz"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["pioglitazone"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [4, 6],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [6, 100],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [7, 140],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [8, 140],
                                }
                            }],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "med-therapy",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            },
                            {
                                "type": "med-therapy",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["dm", "nash", "nafld"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["dm", "nash", "nafld"],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["razo"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["rabeprazole"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["pantoprazole", "rabeprazole", "esomeprazole"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "complaints",
                                "logic":
                                {
                                    "data": ["abdominal pain", "breathlessness", "chest pain", "nausea", "vomiting", "reduced appetite", "shortness of breath", "bloating", "epigastric pain", "abdominal discomfort", "heartburn", "dyspnea", "acidity"],
                                }
                            },
                            {
                                "type": "complaints",
                                "logic":
                                {
                                    "data": ["abdominal pain", "breathlessness", "chest pain", "nausea", "vomiting", "reduced appetite", "shortness of breath", "bloating", "epigastric pain", "abdominal discomfort", "heartburn", "dyspnea", "acidity"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["gacts", "apd", "gerd", "dysp", "doe", "ibs", "abdp", "agsets", "cp", "acid peptic disease", "htn", "t2dm", "t1dm", "htm", "urti", "dypma", "cv_events", "anti_infective"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["gacts", "apd", "gerd", "dysp", "doe", "ibs", "abdp", "agsets", "cp", "acid peptic disease", "htn", "t2dm", "t1dm", "htm", "urti", "dypma", "cv_events", "anti_infective"],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["zoryl"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["glimepiride", "metformin"],
                    }
                },
                {
                    "type": "med-therapy-count",
                    "logic":
                    {
                        "data": ["dm", 3],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [4, 6],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [6, 100],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [7, 140],
                                }
                            },
                            {
                                "type": "test",
                                "logic":
                                {
                                    "data": [8, 140],
                                }
                            }],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "med-therapy",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            },
                            {
                                "type": "med-therapy",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            },
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["dm"],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["lantus"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["insulin glargine", "insulin detemir", "insulin degludec"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "molecule_count",
                                "logic":
                                {
                                    "data": ["sitagliptin", "saroglitazar", "alogliptin", "vildagliptin", "gemigliptin", "exenatide", "rosiglitazone", "linagliptin", "teneligliptin", "glimepiride", "gliclazide", "pioglitazone", "voglibose", "metformin", "acarbose", "empagliflozin", "liraglutide", "repaglinide", "remogliflozin etabonate", "nateglinide", "saxagliptin", "glibenclamide", "dulaglutide", "glipizide", "dapagliflozin", "canagliflozin", "miglitol"],
                                    "count": 3,
                                }
                            },
                            {
                                "type": "molecule_count",
                                "logic":
                                {
                                    "data": ["sitagliptin", "saroglitazar", "alogliptin", "vildagliptin", "gemigliptin", "exenatide", "rosiglitazone", "linagliptin", "teneligliptin", "glimepiride", "gliclazide", "pioglitazone", "voglibose", "metformin", "acarbose", "empagliflozin", "liraglutide", "repaglinide", "remogliflozin etabonate", "nateglinide", "saxagliptin", "glibenclamide", "dulaglutide", "glipizide", "dapagliflozin", "canagliflozin", "miglitol"],
                                    "count": 3,
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["apidra"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "molecule",
                                "logic":
                                {
                                    "data": ["insulin aspart", "insulin lispro"],
                                }
                            },
                            {
                                "type": "molecule",
                                "logic":
                                {
                                    "data": ["insulin aspart", "insulin lispro"],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["amaryl"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["glimepiride"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["metformin"],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["depura"],
                    }
                },
                {
                    "type": "demographics",
                    "logic":
                    {
                        "data": ["age", "16"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["cholecalciferol"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["vtdd", "dpsn", "giddiness", "reduced appetite", "appetite", "fatigue", "weakness"],
                                }
                            },
                            {
                                "type": "complaints",
                                "logic":
                                {
                                    "data": ["vtdd", "dpsn", "giddiness", "reduced appetite", "appetite", "fatigue", "weakness"],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["allegra"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["itch", "sneeze", "cough", "irritation", "rash", "cold", "urticaria", "allergic rhinitis", "allergic bronchitis", "bronchial", "sinusitis"],
                                }
                            },
                            {
                                "type": "complaints",
                                "logic":
                                {
                                    "data": ["itch", "sneeze", "cough", "irritation", "rash", "cold", "urticaria", "allergic rhinitis", "allergic bronchitis", "bronchial", "sinusitis"],
                                }
                            }],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["montelukast", "fexofenadine"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["fexofenadine"],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["valparin"],
                    }
                },
                {
                    "type": "diagnosis",
                    "logic":
                    {
                        "data": ["seizures", "epilepsy", "migraine"],
                    }
                },
                {
                    "type": "molecule",
                    "logic":
                    {
                        "data": ["sodium valproate"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "demographics",
                                "logic":
                                {
                                    "data": ["gender", "F"],
                                }
                            },
                            {
                                "type": "case",
                                "logic":
                                {
                                    "cases": [
                                        {
                                            "type": "demographics",
                                            "logic":
                                            {
                                                "data": ["age", "12"],
                                            }
                                        },
                                        {
                                            "type": "demographics",
                                            "logic":
                                            {
                                                "data": ["age", "51"],
                                            }
                                        }],
                                }
                            }],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["atarax"],
                    }
                },
                {
                    "type": "case",
                    "logic":
                    {
                        "cases": [
                            {
                                "type": "diagnosis",
                                "logic":
                                {
                                    "data": ["stasis eczema", "gpras", "plpss", "audrmts", "eczema", "hand eczema", "pras", "acd", "ezdrts", "drmts", "pdrmts", "iccd", "scabies", "asteatotic eczema", "srdrts", "chronic eczema", "eczema", "phds", "podrts", "utcra", "tinea infection", "sdrmts", "accd", "pdrmts", "spras", "fungal infection"],
                                }
                            },
                            {
                                "type": "complaints",
                                "logic":
                                {
                                    "data": ["genital itching", "throat itching", "itchy lesions on body", "body itching", "red rashes", "itching scalp", "skin rash", "itching", "puffy face", "fever", "typhoid fever", "vulvar itching", "drug allergy", "throat pain", "fever spikes", "itching eye", "body rashes", "ear itching", "puffy face", "rashes", "pruritus", "rashes", "vaginal itching", "skin allergy", "dust allergy", "itching lesion in groin", "perianal itching", "itchy skin rash", "skin itching", "skin rashes", "allergy", "pruritus", "groin itching", "fever", "enteric fever", "facial rash"],
                                }
                            }],
                    }
                },
                {
                    "type": "molecules",
                    "logic":
                    {
                        "data": ["hydroxyzine"],
                    }
                }],
        },
    },
    {
        "type": "case",
        "logic":
        {
            "cases": [
                {
                    "type": "brand",
                    "logic":
                    {
                        "data": ["celevida"],
                    }
                },
                {
                    "type": "complaints",
                    "logic":
                    {
                        "data": ["lack of energy", "fatigue", "exertional fatigue", "proximal muscle weakness", "weakness", "sexual weakness", "fatigability", "fatigue", "weakness", "body ache", "obesity", "fever", "leg weakness"],
                    }
                }],
        },
    }];

// return single data
function searching(data, result = []) {
    if (data.length == 0) {
        return result;
    }

    const lastVal = data.pop();

    if (lastVal.type == 'case') {
        data.push(...lastVal.logic.cases);
    }

    if (lastVal.type == 'diagnosis') {
        result.push(...lastVal.logic.data);
    }

    return searching(data, result);
}

// return multiple data data
function getAllData(data, result = {}) {
    debugger;
    if (data.length == 0) {
        return result;
    }

    const lastVal = data.pop();

    if (lastVal.type == 'case') {
        data.push(...lastVal.logic.cases);
    }
    else  {
        try {
            result[lastVal.type].push(...lastVal.logic.data);
        } catch (e) {
            result[lastVal.type] = [...lastVal.logic.data];
        }
    }

    return getAllData(data, result);
}


console.log( getAllData(data) );