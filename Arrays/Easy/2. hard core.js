// function readLine(genes, health, strands) {
//     let geneMap = new Map();
//     for (let i = 0; i < genes.length; i++) {
//         let gene = genes[i];
//         let healthValue = health[i];
//         if (geneMap.has(gene)) {
//             geneMap.get(gene).push(healthValue);
//         } else {
//             geneMap.set(gene, [healthValue]);
//         }
//     }
    
//     let minHealth = Infinity;
//     let maxHealth = 0;
//     for (let i = 0; i < strands.length; i++) {
//         let [start, end, dna] = strands[i];
//         let totalHealth = 0;

//         for (let j = start; j <= end; j++) {
//             let subDNA = dna.substring(j, end + 1);
//             if (geneMap.has(subDNA)) {
//                 let geneHealthValues = geneMap.get(subDNA);
//                 totalHealth += geneHealthValues.reduce((a, b) => a + b);
//             }
//         }
//         if (totalHealth < minHealth) {
//             minHealth = totalHealth;
//         }
//         if (totalHealth > maxHealth) {
//             maxHealth = totalHealth;
//         }
//     }
    
//     console.log(minHealth, maxHealth);
// }


// let genes = ['a', 'b', 'c', 'aa', 'd', 'b'];
// let health = [1, 2, 3, 4, 5, 6];
// let strands = [[1, 5, 'caaab'], [0, 4, 'xyz'], [2, 4, 'bcdybc']];
// readLine(genes, health, strands);

function getDNAHealth(genes, health, strands) {
    let geneMap = new Map();
    for (let i = 0; i < genes.length; i++) {
        let gene = genes[i];
        let healthValue = health[i];
        if (geneMap.has(gene)) {
            geneMap.get(gene).push(healthValue);
        } else {
            geneMap.set(gene, [healthValue]);
        }
    }
    
    let minHealth = Infinity;
    let maxHealth = 0;
    for (let i = 0; i < strands.length; i++) {
        let [start, end, dna] = strands[i];
        let totalHealth = 0;
        for (let j = start; j <= end; j++) {
            let subDNA = dna.substring(j, end + 1);
            if (geneMap.has(subDNA)) {
                let geneHealthValues = geneMap.get(subDNA);
                totalHealth += geneHealthValues.reduce((a, b) => a + b);
            }
        }
        if (totalHealth < minHealth) {
            minHealth = totalHealth;
        }
        if (totalHealth > maxHealth) {
            maxHealth = totalHealth;
        }
    }
    
    console.log(minHealth, maxHealth);
}


let genes = ['a', 'b', 'c', 'aa', 'd', 'b'];
let health = [1, 2, 3, 4, 5, 6];
let strands = [[1, 5, 'caaab'], [0, 4, 'xyz'], [2, 4, 'bcdybc']];
getDNAHealth(genes, health, strands);


function processData(input) {
    // Parse input
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const genes = lines[1].split(' ');
    const healths = lines[2].split(' ').map(Number);
    const s = parseInt(lines[3]);
    const dna = [];
    for (let i = 0; i < s; i++) {
        const [start, end, d] = lines[i + 4].split(' ');
        dna.push({ start: parseInt(start), end: parseInt(end), d });
    }
    
    // Compute total healths for each DNA
    const totalHealths = dna.map(({ start, end, d }) => {
        let total = 0;
        for (let i = 0; i < n; i++) {
            const gene = genes[i];
            const health = healths[i];
            for (let j = start; j <= end - gene.length; j++) {
                if (d.slice(j, j + gene.length) === gene) {
                    total += health;
                }
            }
        }
        return total;
    });
    
    // Print min and max total healths
    const minHealth = Math.min(...totalHealths);
    const maxHealth = Math.max(...totalHealths);
    console.log(minHealth, maxHealth);
}

const input = `6
a b c aa d b
1 2 3 4 5 6
3
1 5 caaab
0 4 xyz
2 4 bcdybc`;
processData(input); // Output: "0 19"
