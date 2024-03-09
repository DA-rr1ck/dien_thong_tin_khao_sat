// Các mảng chứa các nhóm câu hỏi
const group1 = [
    { question: 'Có phải DNA là viết tắt của "Deoxyribonucleic Acid"?', type: 'trueFalse' },
    { question: 'Trái Đất có 2 mặt trời?', type: 'trueFalse' },
    { question: 'Có 12 tháng trong một năm dương lịch?', type: 'trueFalse' },
    { question: 'Dương lịch là lịch mặt trăng?', type: 'trueFalse' },
    { question: 'Mặt trời là ngôi sao lớn nhất trong hệ Mặt Trời?', type: 'trueFalse' },
    { question: 'Sông Nile là con sông dài nhất thế giới?', type: 'trueFalse' },
    { question: 'Có bốn mùa trong năm trên hầu hết các vùng đất trên Trái Đất?', type: 'trueFalse' },
    { question: 'Sự sống tồn tại ngoài hành tinh đã được chứng minh?', type: 'trueFalse' },
    { question: 'Lửa là một loại khí?', type: 'trueFalse' },
    { question: 'Trái đất là hành tinh thứ 3 tính từ Mặt Trời?', type: 'trueFalse' }
];

const group2 = [
    { question: 'Ai là tác giả của cuốn tiểu thuyết "Mười Nơi Mà Bạn Không Nên Đến"?', type: 'singleChoice', choices: ['a) Agatha Christie', 'b) Mark Twain', 'c) Neil Gaiman', 'd) Bill Bryson'] },

    { question: 'Cơ quan nào trong cơ thể con người chịu trách nhiệm sản xuất insulin?', type: 'singleChoice', choices: ['a) Tuyến giáp', 'b) Tuyến yên', 'c) Tuyến tụy', 'd) Tuyến thượng thận'] },

    { question: 'Bộ phim "Inception" của Christopher Nolan ra mắt vào năm nào?', type: 'singleChoice', choices: ['a) 2008', 'b) 2010', 'c) 2012', 'd) 2014'] },
    
    { question: 'Đâu không phải là một loại loài chim?', type: 'singleChoice', choices: ['a) Kiwi', 'b) Đại bàng', 'c) Khỉ', 'd) Sơn ca'] },
    
    { question: 'Bộ phim hoạt hình nào dưới đây không do Studio Ghibli sản xuất?', type: 'singleChoice', choices: ['a) Spirited Away', 'b) My Neighbor Totoro', 'c) Howls Moving Castle', 'd) Frozen'] },
    
    { question: 'Trong hệ thống quản lý cơ sở dữ liệu, SQL viết tắt của gì?', type: 'singleChoice', choices: ['a) Standard Query Language', 'b) Structured Query Language', 'c) Simple Query Language', 'd) Software Query Language'] },
    
    { question: '"Les Misérables" là tác phẩm của nhà văn nào?', type: 'singleChoice', choices: ['a) Victor Hugo', 'b) Leo Tolstoy', 'c) Charles Dickens', 'd) Fyodor Dostoevsky'] },
    
    { question: 'Trong bộ phim "Harry Potter", ai là bạn thân nhất của Harry?', type: 'singleChoice', choices: ['a) Hermione Granger', 'b) Ron Weasley', 'c) Draco Malfoy', 'd) Neville Longbottom'] },
    
    { question: 'Ai là nhà khoa học nổi tiếng với lý thuyết tương đối của mình?', type: 'singleChoice', choices: ['a) Albert Einstein', 'b) Isaac Newton', 'c) Galileo Galilei', 'd) Nikola Tesla'] },
    
    { question: 'Loài gấu nào là loài gấu lớn nhất trên thế giới?', type: 'singleChoice', choices: ['a) Gấu grizzly', 'b) Gấu Kodiak', 'c) Gấu trắng', 'd) Gấu panda'] }
];

const group3 = [
    { question: 'Nền kinh tế nào sau đây thuộc vào nền kinh tế phát triển?', type: 'multiChoice', choices: ['a) Mỹ', 'b) Trung Quốc', 'c) Ấn Độ', 'd) Đức'] },
 
    { question: 'Đâu là những loại hình năng lượng tái tạo?', type: 'multiChoice', choices: ['a) Năng lượng mặt trời', 'b) Năng lượng hạt nhân', 'c) Năng lượng gió', 'd) Năng lượng than'] },
    
    { question: 'Các ngôn ngữ lập trình nào dưới đây là ngôn ngữ web?', type: 'multiChoice', choices: ['a) HTML', 'b) CSS', 'c) Python', 'd) JavaScript'] },
    
    { question: 'Những bộ phận nào sau đây là phần của hệ tiêu hóa?', type: 'multiChoice', choices: ['a) Ruột non', 'b) Phế quản', 'c) Dạ dày', 'd) Gan'] },
    
    { question: 'Đâu là các loại chất liệu làm quần áo?', type: 'multiChoice', choices: ['a) Cotton', 'b) Kim loại', 'c) Da', 'd) Nhựa'] },
    
    { question: 'Ai là các nhà phê bình nghệ thuật nổi tiếng?', type: 'multiChoice', choices: ['a) Claude Monet', 'b) Vincent van Gogh', 'c) Pablo Picasso', 'd) Henri Matisse'] },
    
    { question: 'Đâu là những nguyên tố hóa học?', type: 'multiChoice', choices: ['a) Oxy', 'b) Nitơ', 'c) Nước', 'd) Cacbon'] },
    
    { question: 'Những ngôn ngữ nào dưới đây thuộc nhóm ngôn ngữ lập trình?', type: 'multiChoice', choices: ['a) Java', 'b) Tiếng Anh', 'c) Tiếng Tây Ban Nha', 'd) C++'] },
    
    { question: 'Những quốc gia nào sau đây là thành viên của Liên Hiệp Quốc?', type: 'multiChoice', choices: ['a) Mỹ', 'b) Trung Quốc', 'c) Nga', 'd) Nhật Bản'] },
    
    { question: 'Đâu là các loại động vật biển?', type: 'multiChoice', choices: ['a) Cá', 'b) Hải cẩu', 'c) Cá voi', 'd) Sóc'] }
];

const group4 = [
    { question: 'Nêu một ví dụ về một vấn đề mà thế giới đang đối mặt trong lĩnh vực môi trường.', type: 'openEnded' },
 
    { question: 'Bạn nghĩ gì về vai trò của công nghệ trong cuộc sống hàng ngày của chúng ta?', type: 'openEnded' },
    
    { question: 'Mô tả một kỷ niệm quan trọng trong cuộc đời của bạn và tại sao nó quan trọng với bạn.', type: 'openEnded' },
    
    { question: 'Bạn nghĩ gì về ảnh hưởng của truyền thông xã hội đối với thế hệ trẻ ngày nay?', type: 'openEnded' },
    
    { question: 'Hãy so sánh và tương phản giữa cuộc sống ở thành phố và cuộc sống ở nông thôn.', type: 'openEnded' },
    
    { question: 'Đánh giá vai trò của giáo dục trong xã hội hiện đại.', type: 'openEnded' },
    
    { question: 'Nêu một ví dụ về một cuốn sách, bộ phim hoặc tác phẩm nghệ thuật mà bạn cảm thấy ảnh hưởng sâu sắc đối với bạn và giải thích tại sao.', type: 'openEnded' },
    
    { question: 'Bạn nghĩ gì về sự phát triển của công nghệ AI (Trí tuệ nhân tạo) và ảnh hưởng của nó đối với tương lai của con người?', type: 'openEnded' },
    
    { question: 'Hãy nói về một vấn đề xã hội mà bạn quan tâm và giải thích tại sao bạn quan tâm đến nó.', type: 'openEnded' },
    
    { question: 'Bạn nghĩ gì về tầm quan trọng của việc duy trì sức khỏe tinh thần và cách bạn có thể chăm sóc bản thân trong cuộc sống hàng ngày?', type: 'openEnded' }
];

function generateQuestions() {
    const surveyContainer = document.getElementById('survey');
    const allQuestions = [...group1, ...group2, ...group3, ...group4]; // Tạo một mảng gộp từ tất cả các nhóm câu hỏi
    
    allQuestions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `<span style="font-size:23px;"><strong>Câu ${index + 1}:</strong> ${q.question}</span><br>`;

        if (q.type === 'trueFalse') {
            questionElement.innerHTML += '<input type="radio" name="q' + index + '" value="true"> Đúng<br>';
            questionElement.innerHTML += '<input type="radio" name="q' + index + '" value="false"> Sai<br>';
        } else if (q.type === 'singleChoice') {
            q.choices.forEach(choice => {
                questionElement.innerHTML += `<input type="radio" name="q${index}" value="${choice}"> ${choice}<br>`;
            });
        } else if (q.type === 'multiChoice') {
            q.choices.forEach(choice => {
                questionElement.innerHTML += `<input type="checkbox" name="q${index}" value="${choice}"> ${choice}<br>`;
            });
        } else if (q.type === 'openEnded') {
            questionElement.innerHTML += '<textarea rows="4" cols="100" name="q' + index + '"></textarea>';
        }

        surveyContainer.appendChild(questionElement);
    });
}

function submitSurvey() {
    document.documentElement.scrollTop = 0;
    const surveyResultsContainer = document.getElementById('surveyResults');
    document.getElementById('title').innerHTML = "Kết quả khảo sát";

    const questions = document.querySelectorAll('.question');
    const userResponses = []; // Mảng lưu trữ các câu trả lời của người dùng
    questions.forEach((q, index) => {
        const inputElement = q.querySelector('input');
        if (inputElement) { // Kiểm tra xem phần tử input có tồn tại không trước khi truy cập thuộc tính 'type'
            const responseType = inputElement.type;
            const responseContainer = document.createElement('div');

            responseContainer.innerHTML = `<strong>Câu ${index + 1}:</strong>`;

            if (responseType === 'radio' || responseType === 'checkbox') {
                const selectedOptions = q.querySelectorAll('input:checked');
                const responseValues = [];
                if (selectedOptions.length === 0) {
                    responseValues.push('Không có câu trả lời.');
                } else {
                    selectedOptions.forEach(option => {
                        responseValues.push(option.value);
                    });
                }
                userResponses.push(responseValues.join(', '));
            } else if (responseType === 'textarea') {
                const openEndedResponse = q.querySelector('textarea').value;
                if (openEndedResponse.trim() === '') {
                    userResponses.push('Không có câu trả lời');
                } else {
                    userResponses.push(openEndedResponse);
                }
            }
        } else {
            // Xử lý trường hợp câu hỏi không có phần tử input
            const textAreaElement = q.querySelector('textarea');
            if (textAreaElement) {
                const openEndedResponse = textAreaElement.value;
                if (openEndedResponse.trim() === '') {
                    userResponses.push('Không có câu trả lời.');
                } else {
                    userResponses.push(openEndedResponse);
                }
            }
        }
    });

    // Hiển thị các câu trả lời của người dùng
    userResponses.forEach((response, index) => {
        const userResponseContainer = document.createElement('div');
        userResponseContainer.innerHTML = `<strong>Câu ${index + 1}:</strong><br>`;
        
        if (response.includes(',')) {
            const responses = response.split(', ');
            responses.forEach(res => {
                const responseElement = document.createElement('div');
                responseElement.textContent = res;
                userResponseContainer.appendChild(responseElement);
            });
        } else {
            userResponseContainer.innerHTML += response;
        }
        
        surveyResultsContainer.appendChild(userResponseContainer);
    });

    document.getElementById('survey').style.display = 'none';
    document.getElementById('surveyResults').style.display = 'block';
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('back-to-main').style.display = 'block';
}

document.getElementById('back-to-main').addEventListener('click', function backToMain() {
    window.location.href = "index.html";
});

