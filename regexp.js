function readFile(input) {
    let file = input.files[0]
    let reader = new FileReader()
    reader.readAsText(file)

    reader.onload = function () {
        let fileContent = reader.result
        let colorMatch = /(\ color:\s*(\ (rgb)\((\d(\s*,\s*\d)*)+\));)/g
        let colors = fileContent.match(colorMatch)
//               colors
        let div = document.getElementById('result')
        div.innerHTML = '<h1 id="buttonH1">COLORS</h1>'
        let buttonH1 = document.getElementById('buttonH1')
        buttonH1.classList.add('joinBtn')
        buttonH1.style.cursor = 'pointer'
        buttonH1.addEventListener('click',()=>{
             if (colors) {
            for (const item of colors) {
                const colorValue = item.match(/\b#(?:[0-9a-fA-F]{3}){1,2}\ |\ (rgb)\((\d(\s*,\s*\d)*)+\)/)[0];
                const div1 = document.createElement('div');
                div1.style.backgroundColor = colorValue;
                div1.style.width = '100px';
                div1.style.height = '100px';
                div1.style.marginBottom = '10px';
                div.append(div1)

            }
        }
        })

       
       
//                     background-colors

        let backMatch = /(\ background-color:\s*(\ (rgb)\((\d(\s*,\s*\d)*)+\));)/g
        let backColor = fileContent.match(backMatch)

        let backDiv = document.getElementById('back')
        backDiv.innerHTML = '<h1  id="buttonH2">Background-Colors</h1>'
        let buttonH2 = document.getElementById('buttonH2')
        buttonH2.style.cursor = 'pointer'
        buttonH2.classList.add('joinBtn')
        buttonH2.addEventListener('click',()=>{
        if (backColor) {
            for (const item of backColor) {
                const backColorValue = item.match(/\b#(?:[0-9a-fA-F]{3}){1,2}\ |\ (rgb)\((\d(\s*,\s*\d)*)+\)/)[0];
                const div2 = document.createElement('div');
                div2.style.backgroundColor = backColorValue
                div2.style.width = '100px';
                div2.style.height = '100px';
                div2.style.marginBottom = '10px';
                backDiv.append(div2)

            }
        }
    })




    }
}