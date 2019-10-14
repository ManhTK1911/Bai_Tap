
function deleteNote() {
        let tbl = document.getElementById("myTable");
        if (tbl) {
                tbl.parentNode.removeChild(tbl);
        }
}

function create() {
        let div1 = document.getElementById('div1');
        div1.innerHTML+='<table border="1px" id="myTable">\n' +
            '        <tr>\n' +
            '            <td> <textarea placeholder="Tittle..." cols="30" rows="2"></textarea></td>\n' +
            '            <td>\n' +
            '                <table>\n' +
            '<!--                    <tr>-->\n' +
            '<!--                        <button onclick="addNote()">New</button>-->\n' +
            '<!--                    </tr>-->\n' +
            '                    <tr>\n' +
            '                        <button type="button" onclick="deleteNote()">Delete</button>\n' +
            '                    </tr>\n' +
            '                </table>\n' +
            '            </td>\n' +
            '        </tr>\n' +
            '        <tr>\n' +
            '            <td colspan="2">\n' +
            '                <textarea placeholder="Content..." cols="38" rows="8"></textarea>\n' +
            '            </td>\n' +
            '        </tr>\n' +
            '    </table>'
}
