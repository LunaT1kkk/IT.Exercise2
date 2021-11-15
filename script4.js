//Задание 4

let books = [
    { 
        article: "1", 
        autor: "Л.Н. Толстой",
        name: "Война и мир",
        info: "Книга о событиях 19 века, о быте людей и их жизни"
    },
    {
        article: "2",
        autor: "Дж.Р.Р.Толкин", 
        name: "Сильмариллион",
        info: "Книга о вселенной Властелина Колец. В ней описаны все высшие существа, процесс создания мира, расс, а также зарождение первой цивилизации"
    },
    {
        article: "3",
        autor: "Ден Браун", 
        name: "Цифровая крепость",
        info: "Книга о криптографии, взломе шифров, а также о слабостях информационных систем"
    }
];

function output(books){
    let html = '<table border="2" style = "border-collapse: collapse; width: 100%">';
    
    html += '<tr>';
    html += '<td>Артикул</td>';
    html += '<td>Автор</td>';
    html += '<td>Название книги</td>';
    html += '<td>Информация о произведении</td>';
    html += '</tr>';
    
    for(let i = 0; i < books.length; i++)
    {
        html += '<tr>';
        html += '<td>' + books[i].article + '</td>';
        html += '<td>' + books[i].autor + '</td>';
        html += '<td>' + books[i].name + '</td>';
        html += '<td>' + books[i].info + '</td>';
        html += '</tr>';
    }

    document.getElementById('container').innerHTML = html + '</table>';
}

output(books);