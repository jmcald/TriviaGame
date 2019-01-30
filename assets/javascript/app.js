$(document).ready(function(){

    var timer = 120;
    var correct = 0;
    var incorrect = 0;
    var isRunning = false;
    var questions = $("#questions")
    var triviaQuestions = {

        questions : [ "What is the capital of Croatia?", 
            "What is the capital of Singapore?", 
            "What is the capital of Hungary?", 
            "What is the capital of Ukraine?", 
            "What is the capital of Japan?", 
            "What is the capital of Netherlands?", 
            "What is the capital of South Korea?", 
            "What is the capital of Canada?", 
            "What is the capital of Poland?", 
            "What is the capital of Greece?", 
            "What is the capital of Thailand?", 
            "What is the capital of Austria?"],

        answers : [

            {ques1 :["A. Kiev", 
                "B. Zagreb", 
                "C. Moscow", 
                "D. Warsaw"]},

            {ques2 :["A. Paris", 
                "B. Ottawa", 
                "C. Singapore", 
                "D. Budapest"]},

            {ques3 :["A. Bangkok", 
                "B. Warsaw", 
                "C. Astana", 
                "D. Budapest"]},

            {ques4 :["A. Zagreb", 
                "B. Kiev", 
                "C. Warsaw", 
                "D. Rome"]},

            {ques5 :["A. Singapore", 
                "B. Beijing", 
                "C. Amersterdam", 
                "D. Tokyo"]},

            {ques6 :["A. Amsterdam", 
                "B. Zagreb", 
                "C. Kuala Lumpur", 
                "D. Warsaw"]},

            {ques7 :["A. Amesterdam", 
                "B. Warsaw", 
                "C. Seoul", 
                "D. Mexico City"]},

            {ques8 :["A. Amesterdam", 
                "B. Ottawa", 
                "C. Washington D.C.", 
                "D. Vienna"]},

            {ques9 :["A. London", 
                "B. Bangkok", 
                "C. Ottawa", 
                "D. Warsaw"]},

            {ques10 :["A. Vienna", 
                "B. Athens", 
                "C. Budapest", 
                "D. Hong Kong"]},

            {ques11 :["A. Bangkok", 
                "B. Berlin", 
                "C. Ottawa", 
                "D. Zagreb"]},

            {ques12 :["A. Madrid", 
                "B. Tokyo", 
                "C. Singapore", 
                "D. Vienna"]},
        ]
    };

    function intializeGame() {
        timer = 0;
        isRunning = false;
    };
    function createButton() {
        btnAttr = [
            {type: "button"},
            {class: "btn btn-secondary m-2"},
            {"data-toggle": "button"},
            {"aria-pressed": false},
            {autocomplete: "off"}
        ];
        var newButton = $("<button>")
        for (i=0; i<0; i++) {
        newButton.attr(btnAttr[i])
        }
    }
    for (i=0; i<questions.length; i++) {
        var question = triviaQuestions.questions[i];
        var newQuestion = $("<div>")
        newQuestion.attr()
        newQuestion.text(question);
        questions.append(newQuestion);
        var newAnswers = $("<div>")
        for (i=0; i<ques[i].length; i++) {
            var button = createButton([i]);
            button.val([i]);
            newAnswers.append(button);
        };
        questions.append(newAnswers);
    };
    initializeGame();
})