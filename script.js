const questions = {
    '5-7': [
        {
            question: 'Найдите значение выражения: 5² + 3².',
            options: ['25', '34', '9'],
            correct: 1, // 5² + 3² = 25 + 9 = 34
            image: "images/photo.jpg" 
        },
        {
            question: 'Решите уравнение: 4x = 24.',
            options: ['5', '6', '7'],
            correct: 1 // x = 24 / 4 = 6
        },
        {
            question: 'Сколько градусов в прямом угле?',
            options: ['90°', '45°', '180°'],
            correct: 0 // Прямой угол = 90°
        },
        {
            question: 'Найдите значение выражения: 15 - 7 + 4.',
            options: ['12', '14', '10'],
            correct: 0 // 15 - 7 + 4 = 12
        },
        {
            question: 'Чему равно произведение 9 и 8?',
            options: ['72', '81', '63'],
            correct: 0 // 9 * 8 = 72
        },
        {
            question: 'Сколько рёбер у куба?',
            options: ['12', '6', '8'],
            correct: 0 // Куб имеет 12 рёбер
        },
        {
            question: 'Найдите площадь квадрата со стороной 6 см.',
            options: ['36 см²', '12 см²', '18 см²'],
            correct: 0 // Площадь квадрата = сторона² = 6² = 36
        },
        {
            question: 'Как называется треугольник, у которого все стороны равны?',
            options: ['Равносторонний', 'Равнобедренный', 'Прямоугольный'],
            correct: 0 // Равносторонний треугольник
        },
        // Новые вопросы
        {
            question: 'Решите уравнение: 3x - 5 = 16.',
            options: ['7', '5', '6'],
            correct: 0 // 3x = 16 + 5 -> x = 21 / 3 = 7
        },
        {
            question: 'Найдите периметр квадрата со стороной 9 см.',
            options: ['36 см', '18 см', '27 см'],
            correct: 0 // Периметр квадрата = 4 * сторона = 36 см
        }
    ],
'8-9': [
        {
            question: 'Решите уравнение: 2x² - 8 = 0.',
            options: ['x = 2', 'x = -2', 'x = 4'],
            correct: 0 // 2x² = 8 -> x² = 4 -> x = 2
        },
        {
            question: 'Чему равен косинус угла 60°?',
            options: ['1/2', '√3/2', '0'],
            correct: 0 // cos(60°) = 1/2
        },
        {
            question: 'Найдите значение выражения: (3 + 4)².',
            options: ['49', '12', '16'],
            correct: 0 // (3 + 4)² = 7² = 49
        },
        {
            question: 'Какой радиус у окружности, если её длина равна 2π?',
            options: ['1', '2', 'π'],
            correct: 0 // Длина окружности = 2πr -> r = 1
        },
        {
            question: 'Чему равен тангенс угла 45°?',
            options: ['1', '0', '√2'],
            correct: 0 // tg(45°) = 1
        },
        {
            question: 'Решите уравнение: x² - 9 = 0.',
            options: ['x = 3', 'x = 9', 'x = 1'],
            correct: 0 // x² = 9 -> x = 3
        },
        {
            question: 'Найдите значение выражения: 2³ + 3².',
            options: ['17', '12', '19'],
            correct: 2 // 2³ + 3² = 8 + 9 = 17
        },
        {
            question: 'Решите уравнение: 5x - 3 = 12.',
            options: ['x = 3', 'x = 4', 'x = 5'],
            correct: 1 // 5x = 12 + 3 -> x = 15 / 5 = 3
        },
        // Новые вопросы
        {
            question: 'Найдите корень уравнения: x² - 25 = 0.',
            options: ['x = 5', 'x = 10', 'x = 25'],
            correct: 0 // x² = 25 -> x = 5
        },
        {
            question: 'Упростите выражение: (x + 2)².',
            options: ['x² + 4x + 4', 'x² + 4', 'x² + 2x + 4'],
            correct: 0 // (x + 2)² = x² + 4x + 4
        }
    ],
'10-11': [
        {
            question: 'Решите уравнение: 4x² - 16 = 0.',
            options: ['x = 2', 'x = 4', 'x = -2'],
            correct: 0 // 4x² = 16 -> x² = 4 -> x = 2
        },
        {
            question: 'Найдите производную функции: f(x) = 3x² + 2x.',
            options: ['6x + 2', '6x', '3x + 2'],
            correct: 0 // f'(x) = 6x + 2
        },
        {
            question: 'В каком интервале функция y = x² убывает?',
            options: ['(-∞, 0)', '(0, +∞)', '(-∞, +∞)'],
            correct: 0 // Функция y = x² убывает на интервале (-∞, 0)
        },
        {
            question: 'Чему равна площадь круга радиусом 3 см?',
            options: ['9π см²', '6π см²', '3π см²'],
            correct: 0 // Площадь круга = πr² -> π * 9
        },
        {
            question: 'Чему равна сумма углов треугольника?',
            options: ['180°', '90°', '360°'],
            correct: 0 // Сумма углов треугольника = 180°
        },
        {
            question: 'Решите уравнение: log₂(8) = x.',
            options: ['x = 3', 'x = 2', 'x = 4'],
            correct: 0 // log₂(8) = 3, так как 2³ = 8
        },
        {
            question: 'Найдите интеграл: ∫ 2x dx.',
            options: ['x² + C', '2x² + C', '2x + C'],
            correct: 0 // Интеграл ∫ 2x dx = x² + C
        },
        {
            question: 'Решите уравнение: sin(x) = 1/2.',
            options: ['x = 30°', 'x = 60°', 'x = 90°'],
            correct: 0 // sin(30°) = 1/2
        },
        // Новые вопросы
        {
            question: 'Найдите производную функции: f(x) = x³ - 4x.',
            options: ['3x² - 4', '3x² + 4', 'x² - 4'],
            correct: 0 // f'(x) = 3x² - 4
        },
        {
            question: 'Решите уравнение: 3x² - 12 = 0.',
            options: ['x = 2', 'x = 4', 'x = -2'],
            correct: 0 // 3x² = 12 -> x² = 4 -> x = 2
        }
    ]
};


function startTest(level) {
    currentLevel = level;
    const testSection = document.getElementById('test');
    const questionsContainer = document.getElementById('questions');
    const testTitle = document.getElementById('test-title');
    
    testTitle.innerText = `Тест для ${level}-го класса`;
    questionsContainer.innerHTML = '';

    questions[level].forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionLabels = ['A', 'B', 'C'];
        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = i;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(`${optionLabels[i]}) ${option}`));
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        questionsContainer.appendChild(questionDiv);
    });

    document.getElementById('intro').style.display = 'none';
    testSection.style.display = 'block';
}

let currentLevel = '';
let score = 0;

function startTest(level) {
    currentLevel = level;
    const testSection = document.getElementById('test');
    const questionsContainer = document.getElementById('questions');
    const testTitle = document.getElementById('test-title');
    
    testTitle.innerText = `Тест для ${level}-го класса`;
    questionsContainer.innerHTML = '';

    questions[level].forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionTitle = document.createElement('h3');
        questionTitle.innerText = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const optionLabels = ['A', 'B', 'C'];
        q.options.forEach((option, i) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = i;
            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(`${optionLabels[i]}) ${option}`));
            questionDiv.appendChild(optionLabel);
            questionDiv.appendChild(document.createElement('br'));
        });

        questionsContainer.appendChild(questionDiv);
    });

    document.getElementById('intro').style.display = 'none';
    testSection.style.display = 'block';

    // Добавляем анимацию кнопке
    const submitButton = document.getElementById('submit-button');
    submitButton.classList.add('animate__animated', 'animate__bounceIn');
}


function goBack() {
    // Скрываем текущий тест
    document.getElementById('test').style.display = 'none';
    // Показываем экран выбора уровня
    document.getElementById('intro').style.display = 'block';
}


function submitTest() {
    const questionsForLevel = questions[currentLevel];
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    const totalQuestions = questionsForLevel.length;
    
    if (answers.length < totalQuestions) {
        // Используем SweetAlert2 для предупреждения
        Swal.fire({
            icon: 'warning',
            title: 'Недостаточно ответов!',
            text: 'Пожалуйста, ответьте на все вопросы перед отправкой теста.',
            confirmButtonText: 'Окей'
        });
        return;
    }

    score = 0;

    answers.forEach(answer => {
        const questionIndex = answer.name.replace('question', '');
        if (parseInt(answer.value) === questionsForLevel[questionIndex].correct) {
            score++;
        }
    });

    document.getElementById('test').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('result-text').innerText = `Вы правильно ответили на ${score} из ${totalQuestions} вопросов.`;
}

function loadQuestion(index) {
    const questionData = currentQuestions[index];

    const questionContainer = document.getElementById('questions');
    questionContainer.innerHTML = ''; // Очищаем контейнер для новых вопросов

    // Создаем элемент для вопроса
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = `<p>${index + 1}. ${questionData.question}</p>`;

    // Проверяем, есть ли изображение, и добавляем его
    if (questionData.image) {
        const imgElement = document.createElement('img');
        imgElement.src = questionData.image;
        imgElement.alt = 'Вопрос изображение';
        imgElement.style.maxWidth = '100%'; // Ограничиваем ширину изображения
        imgElement.style.height = 'auto'; // Сохраняем пропорции
        questionElement.appendChild(imgElement);
    }

    // Создаем кнопки для вариантов ответов
    questionData.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <input type="radio" id="option${optionIndex}" name="question${index}" value="${optionIndex}">
            <label for="option${optionIndex}">${option}</label>
        `;
        questionElement.appendChild(optionElement);
    });

    // Добавляем вопрос и варианты в контейнер
    questionContainer.appendChild(questionElement);
}
