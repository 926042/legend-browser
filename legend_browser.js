const weapons = [
    'hammer',
    'sword',
    'blasters',
    'lance',
    'spear',
    'katars',
    'axe',
    'bow',
    'gauntlets',
    'scythe',
    'cannon',
    'orb',
    'greatsword',
    'boots',
    'chakram'
];

const quest_groups = {
    'In Alpha': 'Legends in Brawlhalla\'s Alpha',
    'Asgardian': 'Asgardian Legends',
    'Batavia': 'Legends with ties to Batavia',
    'BCX 1v1 Winner': 'Legends that have been used to win a BCX 1v1 Championship (any year)',
    'BCX 2v2 Winner': 'Legends that have been used to win a BCX 2v2 Championship (any year)',
    'Book Club': 'Members of the Valhallan Ladies Book Club',
    '"Bot" Bot': 'Legends with "bot" in their bot name',
    'Brynn Chosen': 'Legends brought to Valhalla by Brynn',
    'Didn\'t Read': 'Legends who never read anything before arriving in Brawlhalla',
    'Euro Pop': 'Legends who play in Valhalla\'s premier techno-fantasy euro pop band',
    'Exalted Lion': 'Legends that were once members of the Order of the Exalted Lion',
    'Fangwild': 'Legends that have been to the Fangwild',
    'Hat Wearer': 'Legends that wear hats',
    'Lin Fei Trained': 'Legends who trained with Lin Fei',
    'Magic User': 'Magic-users',
    'Outer Space': 'Legends that have been to outer space',
    'Pet Owner': 'Pet Owners',
    'Saw Dragon': 'Legends who saw a dragon',
    'Semi-Human': 'Legends that are Semi-Human',
    'Shapeshifter': 'Legends with ability to change form',
    'Thera': 'Legends from Thera',
};

const legends = [ // stances: i is the stat being increased, stances[i] is the stat(s) being lowered
    { name: 'Bödvar',            weapons: ['hammer', 'sword'],        stats: [6, 6, 5, 5],   stances: [1, 2, 3, 0, [1, 2], [2, 3], [0, 3], [0, 1]], groups: ['In Alpha', 'BCX 1v1 Winner', 'BCX 2v2 Winner', '"Bot" Bot', 'Didn\'t Read', 'Fangwild', 'Saw Dragon'] },
    { name: 'Cassidy',           weapons: ['blasters', 'hammer'],     stats: [6, 8, 4, 4],   stances: [3, 0, 1, 2, [1, 1], [0, 3], [0, 1], [1, 2]], groups: ['In Alpha', 'BCX 2v2 Winner', '"Bot" Bot', 'Hat Wearer', 'Lin Fei Trained', 'Pet Owner']               },
    { name: 'Orion',             weapons: ['lance', 'spear'],         stats: [4, 6, 6, 6],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [1, 3], [0, 2]], groups: ['In Alpha', 'Asgardian', 'Hat Wearer', 'Outer Space']                                                  },
    { name: 'Lord Vraxx',        weapons: ['blasters', 'lance'],      stats: [4, 8, 4, 6],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [1, 1]], groups: ['In Alpha', 'Brynn Chosen', 'Outer Space']                                                             },
    { name: 'Gnash',             weapons: ['hammer', 'spear'],        stats: [7, 3, 5, 7],   stances: [3, 0, 1, 2, [2, 3], [0, 3], [3, 3], [1, 2]], groups: ['In Alpha', 'Didn\'t Read', 'Hat Wearer', 'Thera']                                                     },
    { name: 'Queen Nai',         weapons: ['katars', 'spear'],        stats: [7, 4, 8, 3],   stances: [1, 3, 0, 2, [1, 2], [0, 0], [0, 3], [0, 2]], groups: ['In Alpha', 'Hat Wearer', 'Magic User']                                                                },
    { name: 'Hattori',           weapons: ['spear', 'sword'],         stats: [4, 6, 4, 8],   stances: [2, 0, 3, 1, [2, 3], [3, 3], [1, 3], [0, 1]], groups: ['In Alpha', 'BCX 2v2 Winner', '"Bot" Bot']                                                             },
    { name: 'Sir Roland',        weapons: ['lance', 'sword'],         stats: [5, 5, 8, 4],   stances: [3, 0, 1, 2, [2, 2], [0, 3], [0, 1], [1, 2]], groups: ['"Bot" Bot', 'Exalted Lion', 'Lin Fei Trained', 'Pet Owner', 'Saw Dragon']                             },
    { name: 'Scarlet',           weapons: ['hammer', 'lance'],        stats: [8, 5, 5, 4],   stances: [2, 3, 1, 0, [1, 2], [0, 0], [1, 3], [0, 2]], groups: ['Book Club', '"Bot" Bot']                                                                              },
    { name: 'Thatch',            weapons: ['blasters', 'sword'],      stats: [7, 5, 3, 7],   stances: [1, 2, 3, 0, [1, 3], [2, 3], [0, 3], [0, 0]], groups: ['In Alpha', 'Hat Wearer', 'Lin Fei Trained', 'Pet Owner', 'Thera']                                     },
    { name: 'Ada',               weapons: ['blasters', 'spear'],      stats: [6, 7, 3, 6],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [1, 3], [0, 1]], groups: ['Euro Pop']                                                                                            },
    { name: 'Sentinel',          weapons: ['hammer', 'katars'],       stats: [5, 4, 7, 6],   stances: [1, 2, 3, 0, [2, 2], [2, 3], [0, 3], [0, 1]], groups: ['"Bot" Bot']                                                                                           },
    { name: 'Lucien',            weapons: ['blasters', 'katars'],     stats: [3, 5, 6, 8],   stances: [3, 0, 1, 2, [2, 3], [3, 3], [0, 1], [1, 2]], groups: ['Batavia', 'BCX 1v1 Winner']                                                                           },
    { name: 'Teros',             weapons: ['axe', 'hammer'],          stats: [8, 3, 6, 5],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [1, 3], [0, 1]], groups: ['BCX 2v2 Winner', 'Brynn Chosen', 'Didn\'t Read', 'Fangwild', 'Saw Dragon', 'Semi-Human', 'Thera']     },
    { name: 'Brynn',             weapons: ['axe', 'spear'],           stats: [5, 5, 5, 7],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [0, 2]], groups: ['Asgardian', 'BCX 1v1 Winner', 'BCX 2v2 Winner', 'Pet Owner']                                          },
    { name: 'Asuri',             weapons: ['katars', 'sword'],        stats: [4, 7, 5, 6],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [0, 2]], groups: ['BCX 2v2 Winner', 'Brynn Chosen', 'Didn\'t Read', 'Semi-Human']                                        },
    { name: 'Barraza',           weapons: ['axe', 'blasters'],        stats: [6, 4, 8, 4],   stances: [1, 3, 0, 2, [1, 2], [2, 3], [0, 0], [0, 2]], groups: ['BCX 1v1 Winner', '"Bot" Bot']                                                                         },
    { name: 'Ember',             weapons: ['bow', 'katars'],          stats: [6, 6, 3, 7],   stances: [2, 0, 3, 1, [2, 3], [0, 3], [1, 3], [0, 1]], groups: ['"Bot" Bot', 'Fangwild', 'Pet Owner', 'Saw Dragon']                                                    },
    { name: 'Azoth',             weapons: ['axe', 'bow'],             stats: [7, 5, 6, 4],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [0, 1], [0, 2]], groups: ['Hat Wearer', 'Magic User', 'Lin Fei Trained', 'Pet Owner', 'Thera']                                   },
    { name: 'Koji',              weapons: ['bow', 'sword'],           stats: [5, 8, 4, 5],   stances: [2, 3, 1, 0, [1, 3], [0, 2], [1, 1], [0, 1]], groups: ['BCX 1v1 Winner']                                                                                      },
    { name: 'Ulgrim',            weapons: ['axe', 'lance'],           stats: [6, 3, 7, 6],   stances: [3, 2, 0, 1, [1, 3], [2, 2], [0, 3], [0, 2]], groups: ['Asgardian', 'BCX 2v2 Winner', 'Euro Pop', 'Hat Wearer', 'Saw Dragon']                                 },
    { name: 'Diana',             weapons: ['blasters', 'bow'],        stats: [5, 6, 5, 6],   stances: [3, 2, 0, 1, [1, 3], [0, 2], [0, 3], [1, 2]], groups: ['Batavia', 'BCX 2v2 Winner', 'Exalted Lion', 'Fangwild', 'Hat Wearer']                                 },
    { name: 'Jhala',             weapons: ['axe', 'sword'],           stats: [7, 7, 3, 5],   stances: [3, 0, 1, 2, [1, 1], [0, 3], [0, 1], [1, 2]], groups: ['BCX 1v1 Winner', 'Exalted Lion', 'Pet Owner', 'Saw Dragon', 'Thera']                                  },
    { name: 'Kor',               weapons: ['gauntlets', 'hammer'],    stats: [6, 5, 7, 4],   stances: [1, 3, 0, 2, [1, 3], [0, 2], [0, 1], [2, 2]], groups: ['Asgardian', '"Bot" Bot']                                                                              },
    { name: 'Wu Shang',          weapons: ['gauntlets', 'spear'],     stats: [5, 7, 5, 5],   stances: [1, 2, 3, 0, [1, 2], [2, 3], [0, 3], [0, 1]], groups: ['BCX 2v2 Winner', 'Lin Fei Trained']                                                                   },
    { name: 'Val',               weapons: ['gauntlets', 'sword'],     stats: [4, 5, 6, 7],   stances: [3, 0, 1, 2, [2, 3], [0, 3], [0, 1], [1, 2]], groups: ['BCX 2v2 Winner', 'Brynn Chosen']                                                                      },
    { name: 'Ragnir',            weapons: ['axe', 'katars'],          stats: [5, 6, 6, 5],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [1, 3], [0, 2]], groups: ['BCX 2v2 Winner', '"Bot" Bot', 'Fangwild', 'Saw Dragon', 'Shapeshifter']                               },
    { name: 'Cross',             weapons: ['blasters', 'gauntlets'],  stats: [7, 4, 6, 5],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [1, 3], [0, 1]], groups: ['BCX 2v2 Winner', 'Hat Wearer']                                                                        },
    { name: 'Mirage',            weapons: ['scythe', 'spear'],        stats: [7, 6, 4, 5],   stances: [1, 3, 0, 2, [2, 3], [0, 3], [0, 1], [0, 2]], groups: ['BCX 1v1 Winner', 'Magic User', 'Pet Owner']                                                           },
    { name: 'Nix',               weapons: ['blasters', 'scythe'],     stats: [4, 5, 7, 6],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [1, 3], [0, 1]], groups: ['"Bot" Bot', 'Brynn Chosen']                                                                           },
    { name: 'Mordex',            weapons: ['gauntlets', 'scythe'],    stats: [6, 4, 5, 7],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [0, 2]], groups: ['Batavia', 'BCX 1v1 Winner', 'Exalted Lion', 'Fangwild', 'Magic User', 'Semi-Human', 'Shapeshifter']   },
    { name: 'Yumiko',            weapons: ['bow', 'hammer'],          stats: [4, 7, 4, 7],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [0, 2]], groups: ['Brynn Chosen', 'Fangwild', 'Saw Dragon', 'Shapeshifter']                                              },
    { name: 'Artemis',           weapons: ['lance', 'scythe'],        stats: [5, 5, 4, 8],   stances: [2, 0, 3, 1, [2, 3], [3, 3], [1, 3], [0, 1]], groups: ['Hat Wearer', 'Outer Space']                                                                           },
    { name: 'Caspian',           weapons: ['gauntlets', 'katars'],    stats: [7, 5, 4, 6],   stances: [3, 2, 0, 1, [1, 3], [0, 2], [0, 3], [1, 2]], groups: ['Batavia']                                                                                             },
    { name: 'Sidra',             weapons: ['cannon', 'sword'],        stats: [6, 4, 6, 6],   stances: [3, 0, 1, 2, [1, 2], [2, 3], [0, 3], [0, 2]], groups: ['Thera']                                                                                               },
    { name: 'Xull',              weapons: ['axe', 'cannon'],          stats: [9, 4, 5, 4],   stances: [2, 3, 1, 0, [2, 3], [0, 0], [0, 1], [1, 2]], groups: ['BCX 2v2 Winner', 'Didn\'t Read', 'Pet Owner', 'Thera']                                                },
    { name: 'Kaya',              weapons: ['bow', 'spear'],           stats: [4, 4, 7, 7],   stances: [1, 2, 3, 0, [1, 2], [0, 3], [1, 3], [0, 2]], groups: ['BCX 1v1 Winner', 'BCX 2v2 Winner', 'Hat Wearer', 'Pet Owner']                                         },
    { name: 'Isaiah',            weapons: ['blasters', 'cannon'],     stats: [5, 6, 7, 4],   stances: [1, 2, 3, 0, [1, 2], [0, 2], [0, 3], [0, 1]], groups: ['"Bot" Bot', 'Exalted Lion', 'Euro Pop']                                                               },
    { name: 'Jiro',              weapons: ['scythe', 'sword'],        stats: [5, 7, 3, 7],   stances: [1, 3, 0, 2, [1, 3], [0, 0], [0, 1], [0, 2]], groups: ['"Bot" Bot']                                                                                           },
    { name: 'Lin Fei',           weapons: ['cannon', 'katars'],       stats: [3, 8, 4, 7],   stances: [1, 3, 0, 2, [1, 3], [3, 3], [1, 1], [0, 2]], groups: ['Pet Owner', 'Saw Dragon']                                                                             },
    { name: 'Zariel',            weapons: ['bow', 'gauntlets'],       stats: [7, 4, 7, 4],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [0, 1], [0, 2]], groups: []                                                                                                      },
    { name: 'Rayman',            weapons: ['axe', 'gauntlets'],       stats: [5, 5, 6, 6],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [1, 3], [0, 1]], groups: ['BCX 2v2 Winner', 'Magic User', 'Outer Space', 'Saw Dragon']                                           },
    { name: 'Dusk',              weapons: ['orb', 'spear'],           stats: [6, 7, 4, 5],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [0, 1], [0, 2]], groups: ['Fangwild', 'Magic User']                                                                              },
    { name: 'Fait',              weapons: ['orb', 'scythe'],          stats: [7, 4, 4, 7],   stances: [3, 2, 0, 1, [1, 3], [0, 0], [0, 3], [1, 2]], groups: ['BCX 1v1 Winner', 'Book Club', 'Brynn Chosen', 'Euro Pop', 'Hat Wearer', 'Magic User', 'Pet Owner']    },
    { name: 'Thor',              weapons: ['hammer', 'orb'],          stats: [6, 4, 7, 5],   stances: [3, 2, 0, 1, [1, 3], [0, 2], [0, 3], [0, 0]], groups: ['Asgardian', 'BCX 2v2 Winner']                                                                         },
    { name: 'Petra',             weapons: ['gauntlets', 'orb'],       stats: [8, 4, 4, 6],   stances: [2, 0, 3, 1, [2, 3], [0, 0], [1, 3], [0, 1]], groups: ['BCX 2v2 Winner', '"Bot" Bot', 'Brynn Chosen']                                                         },
    { name: 'Vector',            weapons: ['bow', 'lance'],           stats: [5, 4, 6, 7],   stances: [1, 3, 0, 2, [1, 3], [2, 3], [3, 3], [0, 2]], groups: ['Outer Space', 'Shapeshifter']                                                                         },
    { name: 'Volkov',            weapons: ['axe', 'scythe'],          stats: [4, 8, 6, 4],   stances: [1, 2, 3, 0, [1, 2], [0, 2], [0, 3], [1, 1]], groups: ['Batavia', 'Lin Fei Trained', 'Magic User', 'Semi-Human', 'Shapeshifter']                              },
    { name: 'Onyx',              weapons: ['cannon', 'gauntlets'],    stats: [5, 4, 8, 5],   stances: [3, 2, 0, 1, [1, 2], [2, 3], [1, 3], [0, 2]], groups: ['Batavia', 'BCX 2v2 Winner', 'Book Club', 'Saw Dragon']                                                },
    { name: 'Jaeyun',            weapons: ['greatsword', 'sword'],    stats: [6, 5, 5, 6],   stances: [1, 2, 3, 0, [1, 2], [2, 3], [0, 3], [0, 1]], groups: ['BCX 1v1 Winner', 'BCX 2v2 Winner', 'Saw Dragon']                                                      },
    { name: 'Mako',              weapons: ['greatsword', 'katars'],   stats: [6, 4, 4, 8],   stances: [2, 0, 3, 1, [1, 2], [0, 3], [3, 3], [0, 0]], groups: ['Didn\'t Read', 'Thera']                                                                               },
    { name: 'Magyar',            weapons: ['greatsword', 'hammer'],   stats: [5, 4, 9, 4],   stances: [1, 2, 3, 0, [2, 2], [0, 2], [0, 3], [0, 1]], groups: ['Batavia', 'Hat Wearer', 'Saw Dragon']                                                                 },
    { name: 'Reno',              weapons: ['blasters', 'orb'],        stats: [4, 7, 6, 5],   stances: [1, 2, 3, 0, [1, 2], [0, 3], [1, 1], [2, 2]], groups: ['Hat Wearer', 'Outer Space']                                                                           },
    { name: 'Munin',             weapons: ['bow', 'scythe'],          stats: [5, 6, 4, 7],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [1, 3], [0, 1]], groups: ['Asgardian']                                                                                           },
    { name: 'Arcadia',           weapons: ['greatsword', 'spear'],    stats: [7, 7, 4, 4],   stances: [2, 3, 1, 0, [2, 3], [0, 0], [1, 1], [0, 1]], groups: ['Fangwild', 'Magic User', 'Pet Owner']                                                                 },
    { name: 'Ezio',              weapons: ['orb', 'sword'],           stats: [5, 7, 4, 6],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [1, 2], [1, 1]], groups: []                                                                                                      },
    { name: 'Tezca',             weapons: ['boots', 'gauntlets'],     stats: [7, 5, 5, 5],   stances: [1, 2, 3, 0, [1, 2], [0, 3], [1, 3], [0, 2]], groups: []                                                                                                      },
    { name: 'Thea',              weapons: ['boots', 'lance'],         stats: [4, 6, 3, 9],   stances: [1, 3, 0, 2, [1, 3], [0, 3], [3, 3], [0, 2]], groups: ['Hat Wearer']                                                                                          },
    { name: 'Red Raptor',        weapons: ['boots', 'orb'],           stats: [6, 6, 4, 6],   stances: [1, 2, 3, 0, [1, 2], [0, 3], [1, 3], [0, 1]], groups: ['Brynn Chosen', 'Hat Wearer', 'Outer Space', 'Saw Dragon']                                             },
    { name: 'Loki',              weapons: ['katars', 'scythe'],       stats: [4, 8, 5, 5],   stances: [1, 2, 3, 0, [1, 1], [2, 3], [0, 3], [0, 1]], groups: ['Asgardian', 'Magic User', 'Pet Owner']                                                                },
    { name: 'Seven',             weapons: ['cannon', 'spear'],        stats: [7, 3, 8, 4],   stances: [3, 2, 0, 1, [2, 2], [0, 2], [0, 3], [1, 2]], groups: ['Brynn Chosen', 'Hat Wearer']                                                                          },
    { name: 'Vivi',              weapons: ['boots', 'blasters'],      stats: [6, 5, 4, 7],   stances: [1, 2, 3, 0, [1, 2], [2, 3], [0, 3], [0, 1]], groups: []                                                                                                      },
    { name: 'Imugi',             weapons: ['axe', 'greatsword'],      stats: [8, 3, 8, 3],   stances: [1, 0, 3, 2, [1, 2], [2, 2], [0, 3], [0, 0]], groups: ['Saw Dragon', 'Shapeshifter']                                                                          },
    { name: 'King Zuva',         weapons: ['boots', 'hammer'],        stats: [8, 4, 6, 4],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [0, 0], [0, 1]], groups: []                                                                                                      },
    { name: 'Priya',             weapons: ['chakram', 'sword'],       stats: [4, 6, 5, 7],   stances: [3, 2, 0, 1, [1, 3], [0, 2], [3, 3], [1, 2]], groups: []                                                                                                      },
    { name: 'Ransom',            weapons: ['bow', 'chakram'],         stats: [7, 4, 3, 8],   stances: [1, 2, 3, 0, [1, 2], [0, 3], [3, 3], [0, 0]], groups: ['Semi-Human']                                                                                          },
    { name: 'Lady Vera',         weapons: ['chakram', 'scythe'],      stats: [3, 7, 8, 4],   stances: [2, 3, 1, 0, [1, 2], [0, 3], [1, 3], [2, 2]], groups: ['Book Club', 'Exalted Lion', 'Hat Wearer', 'Magic User', 'Thera']                                      },
    { name: 'Rupture',           weapons: ['katars', 'lance'],        stats: [9, 3, 5, 5],   stances: [2, 0, 3, 1, [2, 3], [0, 2], [0, 0], [0, 1]], groups: ['Outer Space', 'Semi-Human', 'Shapeshifter']                                                           },
    { name: 'Aurus',             weapons: ['chakram', 'spear'],       stats: [6, 6, 6, 4],   stances: [1, 2, 3, 0, [1, 2], [0, 2], [0, 3], [0, 1]], groups: ['"Bot" Bot']                                                                                           },
    { name: 'Qinghua & Baobao',  weapons: ['cannon', 'orb'],          stats: [5, 4, 5, 8],   stances: [1, 3, 0, 2, [1, 3], [0, 3], [3, 3], [0, 2]], groups: ['Book Club', '"Bot" Bot', 'Hat Wearer', 'Outer Space', 'Pet Owner']                                    },
];

const body_el = document.querySelector('body');

const get_legend = (el) => legends[Number(el.children[0].dataset.legend_no)];

const sort_options = [
    'by_date_added', 
    'alphabetical',
    'by_stat',
];
const sort_modes = {
    by_date_added: 1,
    alphabetical: 1,
    by_stat: 4,
};
const sort_functions = {
    by_date_added: (a, b) => Number(a.children[0].dataset.legend_no) - Number(b.children[0].dataset.legend_no), 
    alphabetical: (a, b) => a.children[0].dataset.name.localeCompare(b.children[0].dataset.name),
    by_stat: (a, b) => {
        const stat_index = Number(document.querySelector('.by_stat').dataset.sort_mode)
        return get_legend(b).stats[stat_index] - get_legend(a).stats[stat_index];
    },
};
const sort_options_container_el = document.querySelector('.sort_options');
const filter_options_container_el = document.querySelector('.filter_options');

for (const sort_option of sort_options) {
    const sort_option_el = create_sort_option(sort_option);
    sort_options_container_el.appendChild(sort_option_el);
}
for (const weapon of weapons) {
    const filter_option_el = create_weapon_filter_option(weapon);
    filter_options_container_el.appendChild(filter_option_el);
}

const legend_icons = [];
const legend_cards = []; 

for (let i = 0; i < legends.length; i++) {
    const icon_el = create_legend_icon(i);
    legend_icons.push(icon_el);
    const card_el = create_legend_card(i);
    legend_cards.push(card_el);
}

const legend_container_el = document.querySelector('.legend_container');

const help_text_el = document.querySelector('.help_text');
const help_icon_el = document.querySelector('.help_icon');
help_icon_el.addEventListener('click', toggle_help)

function toggle_help() {
    if (help_icon_el.classList.contains('option_inactive')) {
        help_icon_el.classList.remove('option_inactive');
        help_icon_el.classList.add('option_active');
        help_text_el.style.display = 'block';
    } else if (help_icon_el.classList.contains('option_active')) {
        help_icon_el.classList.remove('option_active');
        help_icon_el.classList.add('option_inactive');
        help_text_el.style.display = 'none';
    }
}

const group_select = document.getElementById('group_select');
const group_bar = document.querySelector('.group_bar');

for (const group of Object.keys(quest_groups)) {
    const option_el = document.createElement('option');
    option_el.value = group;
    option_el.innerHTML = group;
    group_select.appendChild(option_el);
}

group_select.addEventListener('change', add_quest_group);

const active_groups = [];

function add_quest_group() {
    const group = group_select.value;
    group_select.children[0].selected = true;

    if (active_groups.includes(group)) return;

    active_groups.push(group);

    const group_el = document.createElement('div');
    group_el.innerHTML = group;
    group_el.addEventListener('click', () => {
        group_bar.removeChild(group_el);
        active_groups.splice(active_groups.indexOf(group), 1);
        update_legend_roster();
    });

    group_bar.appendChild(group_el);

    update_legend_roster();
}


function update_legend_roster() {
    let updated_legend_icons = [...legend_icons]; 

    
    updated_legend_icons = updated_legend_icons.filter(legend_el => active_groups.every(group => get_legend(legend_el).groups.includes(group)));
    
    const require_filter_els = get_active_options(filter_options_container_el);
    if (require_filter_els.length > 0) {
        const required_weapons = require_filter_els.map(weapon_filter_el => weapon_filter_el.dataset.weapon);

        updated_legend_icons = (require_filter_els.length === 1)
            ? updated_legend_icons
                .filter(legend_el => required_weapons.every(weapon => get_legend(legend_el).weapons.includes(weapon)))
            : updated_legend_icons
                .filter(legend_el => get_legend(legend_el).weapons.every(weapon => required_weapons.includes(weapon)));
    }
    
    const include_filter_els = get_include_filter_options(filter_options_container_el);
    if (include_filter_els.length > 0) {
        const allowed_weapons = include_filter_els.map(weapon_filter_el => weapon_filter_el.dataset.weapon);
        updated_legend_icons = updated_legend_icons
            .filter(legend_el => allowed_weapons.some(weapon => get_legend(legend_el).weapons.includes(weapon)));
    }

    const active_sort_el = get_active_options(sort_options_container_el);
    if (active_sort_el.length > 0) {
        updated_legend_icons.sort(sort_functions[active_sort_el[0].dataset.sort_option])
    }
    
    legend_container_el.replaceChildren();
    for (const legend_icon_el of updated_legend_icons) {
        legend_container_el.appendChild(legend_icon_el);
    }
}

function get_active_options(parent_el) {
    const active_options = [];
    for (const child_el of parent_el.children) {
        if (child_el.dataset.is_active === 'true' || child_el.dataset.state === 'require') {
            active_options.push(child_el);
        }
    }
    return active_options;
}

function get_include_filter_options(parent_el) {
    const active_options = [];
    for (const child_el of parent_el.children) {
        if (child_el.dataset.state === 'include') {
            active_options.push(child_el);
        }
    }
    return active_options;
}

function toggle_sort_option_state(e) {
    const option = e.target;

    const is_active = (option.dataset.is_active === 'true');

    if (is_active) {
        if (cycle_sort_mode(option)) {
            option.style.backgroundImage = `url(images/icon/sort_${option.dataset.sort_option}_${option.dataset.sort_mode}.png)`;
        }
    }
    else {
        for (const sort_option_el of sort_options_container_el.children) {
            sort_option_el.classList.remove('option_active');
            sort_option_el.classList.add('option_inactive');
            sort_option_el.dataset.is_active = false;
        }

        option.classList.remove('option_inactive');
        option.classList.add('option_active');
        option.dataset.is_active = true;
    }
    
    update_legend_roster();
}

function toggle_filter_option_state(e) {
    const option = e.target;
    
    const is_required = e.type === 'click';
    const state = is_required ? 'require' : 'include'

    const make_inactive = (option.dataset.state === state);

    
    if (make_inactive) {
        option.classList.toggle('option_active_require', false);
        option.classList.toggle('option_active_include', false);
        option.classList.add('option_inactive');
        option.dataset.state = false;
    } else if (state === 'require') {
        option.classList.toggle('option_inactive', false);
        option.classList.toggle('option_active_include', false);
        option.classList.add('option_active_require');
        option.dataset.state = 'require';
    } else if (state === 'include') {
        option.classList.toggle('option_inactive', false);
        option.classList.toggle('option_active_require', false);
        option.classList.add('option_active_include');
        option.dataset.state = 'include';   
    }
    
    update_legend_roster();
}


function cycle_sort_mode(el) {
    if (sort_modes[el.dataset.sort_option] <= 1) return null;

    let sort_mode = Number(el.dataset.sort_mode) + 1;
    if (sort_mode >= sort_modes[el.dataset.sort_option]) {
        sort_mode = 0;
    }

    el.dataset.sort_mode = sort_mode;
    return true;
}

function create_sort_option(sort_option) {
    const sort_option_el = document.createElement('div');
    sort_option_el.classList.add('option', 'sort_option', sort_option);
    sort_option_el.dataset.sort_option = sort_option;
    sort_option_el.dataset.sort_mode = 0;

    if (sort_option === 'by_date_added') { // kronologisk er på som standard
        sort_option_el.dataset.is_active = true;
        sort_option_el.classList.add('option_active');
    } else {
        sort_option_el.dataset.is_active = false;
        sort_option_el.classList.add('option_inactive');
    }

    sort_option_el.style.backgroundImage = (sort_modes[sort_option] === 1)
        ? `url(images/icon/sort_${sort_option}.png)`
        : `url(images/icon/sort_${sort_option}_0.png)`;
    sort_option_el.addEventListener('click', toggle_sort_option_state);
    
    return sort_option_el
}

function create_weapon_filter_option(weapon) {
    const filter_option_el = document.createElement('div');
    filter_option_el.classList.add('option', 'filter_option', 'option_inactive');
    filter_option_el.dataset.state = false;
    filter_option_el.dataset.weapon = weapon;
    filter_option_el.style.backgroundImage = `url(images/icon/weapon_${weapon}.png)`;
    filter_option_el.addEventListener('click', toggle_filter_option_state);
    filter_option_el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        toggle_filter_option_state(e);
    });
    
    return filter_option_el;
}

function create_legend_icon(i) {
    const icon_container_el = document.createElement('div');
    icon_container_el.classList.add('legend_icon_container')

    const icon_el = document.createElement('div');
    icon_el.classList.add('legend_icon');
    icon_el.classList.add(`legend_${i}`);
    icon_el.dataset.legend_no = i;
    icon_el.dataset.name = legends[i].name;
    icon_el.style.backgroundImage = `url(images/legend/icon/${i+1}.png)`;

    icon_el.addEventListener('click', () => update_legend_card(i))

    icon_container_el.appendChild(icon_el);

    // show legend info
    icon_container_el.addEventListener('mouseover', () => {
        icon_el.style.backgroundSize = '115%';

        const info_container_el = document.createElement('div');
        info_container_el.classList.add('legend_info_container');

        const icon_rect = icon_el.getBoundingClientRect();
        info_container_el.style.left = window.scrollX + icon_rect.left + icon_rect.width - 3 + 'px';
        info_container_el.style.top = window.scrollY + icon_rect.top + 'px'; 
        
        const weapons_el = create_legend_weapon_info(i);
        const stats_el = create_legend_stats_info(i);
        
        info_container_el.appendChild(stats_el);
        info_container_el.appendChild(weapons_el);
        
        body_el.appendChild(info_container_el);
        
        const rect = info_container_el.getBoundingClientRect();
        // console.log(rect)
        if (rect.width + rect.x > window.innerWidth) {
            info_container_el.style.removeProperty('left');
            info_container_el.style.right = (window.innerWidth - icon_rect.left) - 3 + 'px'
            info_container_el.classList.add('reversed');

            icon_el.style.borderRadius = '0 5px 5px 0'
        } else {
            icon_el.style.borderRadius = '5px 0 0 5px'
        }
        
    });
    // hide legend info
    icon_container_el.addEventListener('mouseout', () => {
        icon_el.style.backgroundSize = '103%';

        const info_container_el = document.querySelector('.legend_info_container');
        info_container_el.remove();
        
        icon_el.style.borderRadius = '5px';
    });

    

    
    return icon_container_el;
}

function create_legend_stats_info(i) {
    const stats_el = document.createElement('div');
    stats_el.classList.add('stats_container');
    
    for (let j = 0; j < 4; j++) {
        const stat_el = document.createElement('div');
        stat_el.classList.add('legend_stat')
        
        const stat_icon_el = document.createElement('div');
        stat_icon_el.classList.add('stat_icon')
        stat_icon_el.style.backgroundImage = `url(images/icon/stat_${j}.png)`;
        
        const stat_value = legends[i].stats[j];
        const stat_value_el = document.createElement('img');
        stat_value_el.classList.add('stat_value');
        stat_value_el.src = `./images/stat/${stat_value}.png`;
        
        stat_el.appendChild(stat_icon_el);
        stat_el.appendChild(stat_value_el);
        stats_el.appendChild(stat_el);
    }
    
    return stats_el;
}

function create_legend_weapon_info(i) {
    const info_el = document.createElement('div');
    info_el.classList.add('weapon_info');
    
    for (const weapon of legends[i].weapons) {
        const weapon_icon_el = document.createElement('div');
        weapon_icon_el.classList.add('weapon_icon');
        weapon_icon_el.style.backgroundImage = `url(images/icon/weapon_${weapon}.png)`;
        info_el.appendChild(weapon_icon_el);  
    }
    
    return info_el;
}

function create_legend_card(legend_index) {
    const card_el = document.createElement('div');
    card_el.classList.add('legend_card_container');

    const image_el = document.createElement('div');
    image_el.classList.add('legend_card_image');
    image_el.style.backgroundImage = `url(images/legend/crop/${legend_index+1}.png)`;

    const info_container = document.createElement('div');
    info_container.classList.add('card_info_container');

    const name_el = document.createElement('h1');
    name_el.classList.add('legend_card_legend_name');
    name_el.innerHTML = legends[legend_index].name;
    
    const info_el = document.createElement('div');
    info_el.classList.add('legend_card_info');
    
    const icons_container_el = document.createElement('div');
    icons_container_el.classList.add('legend_card_stat_icons_container');
    const values_container_el = document.createElement('div');
    values_container_el.classList.add('legend_card_stat_values_container');
    
    for (let stat_index = 0; stat_index < 4; stat_index++) {
        const stat_icon_el = document.createElement('div');
        stat_icon_el.classList.add('legend_card_stat_icon', 'stance_inactive')
        stat_icon_el.style.backgroundImage = `url(images/icon/sort_by_stat_${stat_index}.png)`;
        stat_icon_el.addEventListener('click', () => cycle_stance(stat_icon_el, legend_index, stat_index));
        
        const stat_value = legends[legend_index].stats[stat_index];
        const stat_value_el = document.createElement('div');
        stat_value_el.classList.add('legend_card_stat_value');
        stat_value_el.style.backgroundImage = `url(images/stat/${stat_value}.png)`;
        stat_value_el.addEventListener('click', () => cycle_stance(stat_icon_el, legend_index, stat_index));
        
        icons_container_el.appendChild(stat_icon_el);
        values_container_el.appendChild(stat_value_el);
    }
    info_el.appendChild(icons_container_el);
    info_el.appendChild(values_container_el);
    
    const weapons_container_el = document.createElement('div');
    weapons_container_el.classList.add('legend_card_weapons_container');
    
    for (const weapon of legends[legend_index].weapons) {
        const weapon_el = document.createElement('div');
        weapon_el.classList.add('legend_card_weapon_icon');
        weapon_el.style.backgroundImage = `url(images/icon/weapon_${weapon}.png)`;
        
        weapons_container_el.appendChild(weapon_el);
    }
    info_el.appendChild(weapons_container_el);
    
    const card_info_tips_text_el = document.createElement('p');
    card_info_tips_text_el.classList.add('card_info_tips_text');
    card_info_tips_text_el.innerHTML = 'Click a stat bar or icon to cycle the stance';
    
    const image_name_container = document.createElement('div');
    image_name_container.classList.add('card_image_name_container');
    image_name_container.appendChild(image_el);
    image_name_container.appendChild(name_el);

    info_container.appendChild(info_el);
    info_container.appendChild(card_info_tips_text_el);
    
    card_el.appendChild(image_name_container);
    card_el.appendChild(info_container);

    const groups_container = document.createElement('div');
    groups_container.classList.add('card_groups_container');

    const groups = legends[legend_index].groups;

    for (const group of groups) {
        const group_el = document.createElement('div');
        // group_el.classList.add('card_group');
        group_el.innerHTML = group;
        group_el.title = quest_groups[group];

        groups_container.appendChild(group_el);
    }

    card_el.appendChild(groups_container);
    
    return card_el;
}

function cycle_stance(stat_icon_el, legend_index, stat_index) {    
    const card_info_el = stat_icon_el.parentElement.parentElement;
    const is_active = !stat_icon_el.classList.contains('stance_inactive');
    const super_stance_active = stat_icon_el.classList.contains('super_stance_active');

    if (is_active) { // make super stance
        clear_stance(card_info_el, legend_index);

        stat_icon_el.style.backgroundImage = `url(images/icon/sort_by_stat_${stat_index}+.png)`;
        stat_icon_el.classList.remove('stance_active');
        stat_icon_el.classList.add('super_stance_active');
        
        change_stance(card_info_el, legend_index, stat_index, true);
        
    } else if (super_stance_active) { // make inactive
        stat_icon_el.style.backgroundImage = `url(images/icon/sort_by_stat_${stat_index}.png)`;
        stat_icon_el.classList.remove('super_stance_active');
        stat_icon_el.classList.add('stance_inactive');
        
        clear_stance(card_info_el, legend_index);
        
    } else { // make active
        clear_stance(card_info_el, legend_index)
        
        stat_icon_el.style.backgroundImage = `url(images/icon/sort_by_stat_${stat_index}.png)`;
        stat_icon_el.classList.remove('stance_inactive');
        stat_icon_el.classList.add('stance_active');

        change_stance(card_info_el, legend_index, stat_index);
    }
}

function change_stance(card_info_el, legend_index, increase_index, is_super_stance = false) {
    const stat_value_els = [...card_info_el.children[1].children];
    
    const legend = legends[legend_index];

    if (is_super_stance) {
        const decrease_indexes = legend.stances[increase_index + 4];
    
        for (let i = 0; i < 4; i++) { // clear all stance changes
            stat_value_els[i].style.backgroundImage = `url(images/stat/${legend.stats[i]}.png)`;
        }

        stat_value_els[increase_index].style.backgroundImage = `url(images/stat/${legend.stats[increase_index]}+2.png)`;

        if (decrease_indexes[0] === decrease_indexes[1]) {
            stat_value_els[decrease_indexes[0]].style.backgroundImage = `url(images/stat/${legend.stats[decrease_indexes[0]]}-2.png)`;
        } else {
            for (const index of decrease_indexes) {
                stat_value_els[index].style.backgroundImage = `url(images/stat/${legend.stats[index]}-1.png)`;
            }
        }

        return;
    }

    const decrease_index = legend.stances[increase_index];

    for (let i = 0; i < 4; i++) { // clear all stance changes
        stat_value_els[i].style.backgroundImage = `url(images/stat/${legend.stats[i]}.png`;
    }
    stat_value_els[increase_index].style.backgroundImage = `url(images/stat/${legend.stats[increase_index]}+1.png)`;
    stat_value_els[decrease_index].style.backgroundImage = `url(images/stat/${legend.stats[decrease_index]}-1.png)`;
}
function clear_stance(card_info_el, legend_index) {
    const stat_icon_els = [...card_info_el.children[0].children];
    for (let i = 0; i < stat_icon_els.length; i++) {
        const stat_el = stat_icon_els[i];

        if (stat_el.classList.contains('stance_active') || stat_el.classList.contains('super_stance_active')) {
            stat_el.src = `images/icon/sort_by_stat_${i}.png`;
            stat_el.classList.toggle('stance_active', false);
            stat_el.classList.toggle('super_stance_active', false);
            stat_el.classList.add('stance_inactive');
        }
    }
    
    const legend = legends[legend_index];
    const stat_value_els = [...card_info_el.children[1].children];
    for (let i = 0; i < 4; i++) { // clear all stance changes
        stat_value_els[i].style.backgroundImage = `url(images/stat/${legend.stats[i]}.png`;
    }
}

let prev_displayed_legend_index = 0; // starts displaying Bödvar
const card_container_el = document.querySelector('.card_container')
function pick_from_selection() {
    const legend_indexes = [...legend_container_el.children]
        .map(el => Number(el.children[0].dataset.legend_no))
        .filter(legend_index => legend_index !== prev_displayed_legend_index);

    const amount = legend_indexes.length;
    if (!amount) return null; // if no possible picks, don't update

    const picked_legend_index = legend_indexes[Math.floor(Math.random()*amount)];

    update_legend_card(picked_legend_index);
}

function update_legend_card(legend_index) {
    const card_info_el = legend_cards[prev_displayed_legend_index].children[1].children[0];
    clear_stance(card_info_el, prev_displayed_legend_index);

    const legend_card_el = legend_cards[legend_index];
    
    card_container_el.replaceChildren(card_container_el.children[0]);
    card_container_el.appendChild(legend_card_el);

    prev_displayed_legend_index = legend_index;
}

const pick_button_el = document.querySelector('.pick_button');
pick_button_el.addEventListener('click', pick_from_selection)

update_legend_card(0);
update_legend_roster();
