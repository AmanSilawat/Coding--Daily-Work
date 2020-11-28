class MusicNode {
    constructor(name, type = 'RootNode') {
        switch (type) {
            case 'RootNode':
                this.name = name;
                this.type = type;
                this.children = [];
                break;

            case 'folder':
                this.name = name;
                this.type = type;
                this.children = [];
                break;

            case 'track':
                this.type = type;
                this.tracks = [];
                break;

            default:
                console.log('err');
                break;
        }
    }
}

const data = [
    ['top5', 'tu-kuja-mann-kuja.mp3'],
    ['top5', 'Aaya-Tere-Dar-Par.mp3'],
    ['top5', 'wohi-khuda-hai-coke-studio.mp3'],
    ['top5', 'aane-walon-yeh-to-batao-irulz.mp3'],
    ['top5', 'likh-raha-hoon-naat-sarwar.mp3'],
    ['genre', 'naat sharif', 'mera-koi-nahi-hai-tere-siwa.mp3'],
    ['genre', 'naat sharif', 'tu-kuja-mann-kuja.mp3'],
    ['genre', 'naat sharif', 'ishq-k-rang-main-rang-jao.mp3'],
    ['genre', 'naat sharif', 'kabay-ki-ronaq.mp3'],
    ['genre', 'naat sharif', 'dil-pukare-ya-ali-manqabat.mp3'],
    ['genre', 'naat sharif', 'nabi-ka-jashn-aya.mp3'],
    ['genre', 'naat sharif', 'wohi-khuda-hai-coke-studio.mp3'],
    ['genre', 'naat sharif', 'likh-raha-hoon-naat-sarwar.mp3'],
    ['genre', 'naat sharif', 'paigham-saba-lai-hai.mp3'],
    ['genre', 'qawwalies', 'sufi qawwalis', 'kun-faya-kun.mp3'],
    ['genre', 'qawwalies', 'sufi qawwalis', 'bhar-do-jholi-meri.mp3'],
    ['genre', 'qawwalies', 'sufi qawwalis', 'Aaya-Tere-Dar-Par.mp3'],
    ['genre', 'qawwalies', 'best qawwalies', 'mohammed_ke_shaher_mein.mp3'],
    ['album', 'al nabi sallu alai', 'kaliyan-zulfan-wala.mp3'],
    ['album', 'al nabi sallu alai', 'allah-ho-allah-ho-dam-ba-dam.mp3'],
    ['album', 'al nabi sallu alai', 'aye-aqa-madni-aqa.mp3'],
    ['album', 'al nabi sallu alai', 'likh-raha-hoon-naat.mp3'],
    ['album', 'aarzoo-e-rehmat', 'sab-se-owlah-wa-aalah-irulz.mp3'],
    ['album', 'aarzoo-e-rehmat', 'aane-walon-yeh-to-batao-irulz.mp3'],
    ['album', 'rang de maula', 'rang-de-maula.mp3'],
    ['album', 'rang de maula', 'padho-durood.mp3'],
    ['singer', 'atif aslam', 'wohi-khuda-hai-coke-studio.mp3'],
    ['singer', 'hafiz ahmed raza qadri', 'mera-koi-nahi-hai-tere-siwa.mp3'],
    ['singer', 'hafiz ahmed raza qadri', 'tu-kuja-mann-kuja.mp3'],
    ['singer', 'hafiz ahmed raza qadri', 'dil-pukare-ya-ali-manqabat.mp3'],
    ['singer', 'hafiz ahmed raza qadri', 'paigham-saba-lai-hai.mp3'],
    ['singer', 'owais raza qadri', 'ishq-k-rang-main-rang-jao.mp3'],
    ['singer', 'owais raza qadri', 'kabay-ki-ronaq.mp3'],
    ['singer', 'owais raza qadri', 'nabi-ka-jashn-aya.mp3'],
    ['singer', 'owais raza qadri', 'likh-raha-hoon-naat-sarwar.mp3']
];

function recursion(data, MusicNode, treeData, previousNode = 'RootNode') {
    if (data.length == 0) {
        return treeData['RootNode'];
    }

    const lastRow = data.pop();
    const firstVal = lastRow.shift();

    // if not a music type
    if (firstVal.match(/\.mp3/) == null) {
        try {
            // already defing then skip this try code block
            treeData[firstVal].name == undefined;
        } catch (e) {
            treeData[firstVal] = new MusicNode(firstVal, 'folder');
            treeData[previousNode].children.push(treeData[firstVal]);
        }

        // reassign
        previousNode = firstVal;
        data.push(lastRow);

    } else {
        try {
            treeData[previousNode].children[0].tracks.push(firstVal);

        } catch (error) {
            treeData[firstVal] = new MusicNode(firstVal, 'track');
            treeData[previousNode].children.push(treeData[firstVal]);
            treeData[firstVal].tracks.push(firstVal);
        }

        previousNode = 'RootNode';
    }

    return recursion(data, MusicNode, treeData, previousNode);
}

const treeData = {};
treeData['RootNode'] = new MusicNode('RootNode', 'RootNode');

const musicTreeObje = recursion(data, MusicNode, treeData);
console.log(musicTreeObje);