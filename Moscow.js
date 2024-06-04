const nameElement = document.getElementById('name'); // Получаем элемент с идентификатором 'name' из DOM.
const familyElement = document.getElementById('family'); // Получаем элемент с идентификатором 'family' из DOM.
const kursElement = document.getElementById('kurs'); // Получаем элемент с идентификатором 'date' из DOM.
const dogElement = document.getElementById('time'); // Получаем элемент с идентификатором 'dog' из DOM.


fetch('./Json/moscow.json') // Выполняем запрос на загрузку файла 'file.json'.
  .then(response => response.json())
  .then(data => {

    let date = new Date();
    let mons = date.getMonth() + 1;
    let day = date.getDate();
    let key = `${mons}/${day}`;
    // Обрабатываем загруженные данные
    const times = data[key];
    // Используем метод slice, чтобы получить подмассив без первого элемента
    times.forEach(time => { // Для каждого времени в данных, начиная с индекса 1.
      const li = document.createElement('li'); // Создаем новый элемент списка.
      li.textContent = time; // Устанавливаем текстовое содержимое элемента списка.
      dogElement.appendChild(li); // Добавляем элемент списка в элемент с идентификатором 'dogElement'.
    });
  })








