let mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type:String,
        required: true,
        unique: false
    },
    dateSubmitted: {
        type:Date,
        required: true,
        unique: false
    },
    countYAY: {
        type:Number,
        required: true,
        unique: false,
        default: 0,
        min: 0
    },
    countNAY: {
        type:Number,
        required: true,
        unique: false,
        default: 0,
        min: 0
    },
    tags: {
        type:String,
        required : false,
        unique: false
    },
    src: {
        type: String,
        required: true,
        unique: false
    },
    countGender: {
        male: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        female: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        other: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        }
    },
    countAge: {
        child: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        teen: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        youngAdult: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        adult: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        middleAgedAdult: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        senior: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        }
    },
    countContinent: {
        NA: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        SA: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        EU: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        AS: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        AF: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        },
        OC: {
            yay: {
                type: Number,
                default: 0,
                min: 0
            },
            nay: {
                type: Number,
                default: 0,
                min: 0
            }
        }
    }
});


module.exports = mongoose.model('Item', itemSchema);
