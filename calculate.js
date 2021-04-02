/* 
on clicking the button, we need to take all the input from the forms, since this will 
be the last thing a person will interact with, on clicking this, the submission process will begin. 
*/ 

const submit = document.getElementById('submission');

/* 
when a person clicks on the button, we get all the info he or she typed 
also, all of these are parsed to float values to aid the calculation. 
*/

// when the calculate button is clicked;
// the entire code is within the function because of the scope of the variables declared.
// a good point to refactor the code and set up the backend would be to increase the scope of the variables.
submit.addEventListener('click', ()=>
{   
    // 20 inputs

    var salary = parseFloat(document.getElementById('monthly-salary').value/12);
    var creditLimit = parseFloat(document.getElementById('credit-limit').value);
    var cardsOwned = parseFloat(document.getElementById('cards-owned').value);
    var rent = parseFloat(document.getElementById('rent').value);
    var emi = parseFloat(document.getElementById('emi').value);
    var basicAmenities = parseFloat(document.getElementById('basic-amenities').value);
    var overdueBills = parseFloat(document.getElementById('overdue-bills').value);
    var outstandingCredit = parseFloat(document.getElementById('outstanding-credit').value);
    var unpaidFines = parseFloat(document.getElementById('unpaid-fines').value);
    var loansClosed = parseFloat(document.getElementById('loans-closed').value);
    var maxedCards = parseFloat(document.getElementById('maxed-cards').value);
    var lateEmi = parseFloat(document.getElementById('late-emi').value);
    var creditHistory7 = parseFloat(document.getElementById('credit-history-7').value);
    var creditHistory6 = parseFloat(document.getElementById('credit-history-6').value);
    var creditHistory5 = parseFloat(document.getElementById('credit-history-5').value);
    var creditHistory4 = parseFloat(document.getElementById('credit-history-4').value);
    var creditHistory3 = parseFloat(document.getElementById('credit-history-3').value);
    var creditHistory2 = parseFloat(document.getElementById('credit-history-2').value); 
    var recentLoans = parseFloat(document.getElementById('recent-loans').value);
    var recentCreditCards = parseFloat(document.getElementById('new-credit').value);


    if (creditLimit == undefined || creditLimit == NaN)
    creditLimit = 0;
    if (cardsOwned == undefined || cardsOwned == NaN)
    cardsOwned = 0;
    if (rent == undefined || rent == NaN)
    rent = 0;
    if (emi == undefined |emi == NaN)
    emi = 0;
    if (overdueBills == undefined || overdueBills == NaN)
    overdueBills = 0;
    if (outstandingCredit == undefined || outstandingCredit == NaN)
    outstandingCredit = 0;
    if (unpaidFines == undefined || unpaidFines == NaN)
    unpaidFines = 0;
    if (loansClosed == undefined || loansClosed == NaN)
    loansClosed = 0;
    if (maxedCards == undefined || maxedCards == NaN)
    maxedCards = 0;
    if (lateEmi == undefined || lateEmi == NaN)
    lateEmi = 0;
    if (recentCreditCards == undefined || recentCreditCards == NaN)
    recentCreditCards = 0;
    if (recentLoans == undefined || recentLoans == NaN)
    recentLoans = 0;
    if (creditHistory2 == undefined || creditHistory2 == NaN)
    creditHistory2 = 0;
    if (creditHistory3 == undefined || creditHistory3 == NaN)
    creditHistory3 = 0;
    if (creditHistory4 == undefined || creditHistory4 == NaN)
    creditHistory4 = 0;
    if (creditHistory5 == undefined || creditHistory5 == NaN)
    creditHistory5 = 0;
    if (creditHistory6 == undefined || creditHistory6 == NaN)
    creditHistory6 = 0;
    if (creditHistory7 == undefined || creditHistory7 == NaN)
    creditHistory7 = 0;
    

  // these are the trust values.
    
    var A = 5;
    var B = 5;
    var C = 10;
    var D = 5;
    var E = 10;

    // flag is for repayment capacity.

    var flag = 0;

    // the following is the calculations done as written in the document.

    var p1 = (rent/salary) * 100;
    var p2 = (basicAmenities/salary) * 100;
    var p3 = (emi/salary) * 100;

    if(p3 > 50)    
    flag = 1;

    else if(p1+p2+p3 > 100)
    flag = 2;

    if(100-p1-p2-p3 > 50)
    A++;
    else if(100-p1-p2-p3 < 20)
    A--;


    if ( p1 < 20 && p1 > 0)
    A++;
    else if(p1 > 30)
    A--;

    if( (overdueBills/salary) * 100 < 50 && (overdueBills/salary) * 100 > 20)
    {
        A--;
        B--;
    }
    else if( (overdueBills/salary) * 100 > 50)
    {
        A-=2;
        B-=2;
    }

    if( (outstandingCredit/creditLimit) * 100 > 25 && (outstandingCredit/creditLimit) * 100 < 50)
    B--;
    else if((outstandingCredit/creditLimit) * 100 > 50)
    B-=2;

    if(unpaidFines == 0)
    B+=2;
    else if( (unpaidFines/salary) * 100 < 10 && (unpaidFines/salary) * 100 > 0)
    B-=0.5;
    else if((unpaidFines/salary) * 100 < 20 && (unpaidFines/salary) * 100 < 10)
    B--;
    else if((unpaidFines/salary) * 100 < 40 && (unpaidFines/salary) * 100 < 20)
    B-=2;
    else if((unpaidFines/salary) * 100 < 40)
    B-=3;

    C = C - ( (0.5*creditHistory7) + (0.6*creditHistory6) + (0.7*creditHistory5) + (0.8*creditHistory4) + (0.9*creditHistory3) + (1*creditHistory2) );

    D+=cardsOwned;
    D-=maxedCards;

    D+=(loansClosed/2);
    D-=(lateEmi/2);

    E-=recentLoans;
    E-=recentCreditCards;

    // the code written below is to handle any values that ove out of bounds for the trust value.
    // if it goes beyond the max value, then it is set to max of 10.
    // if it goes below the min value, then it is set to a min value of 1.

    if(A<1)
    A=1;
    else if(A>10)
    A=10;

    if(B<1)
    B=1;
    else if(B>10)
    B=10;

    if(C<1)
    C=1;
    else if(C>10)
    C=10;

    if(D<1)
    D=1;
    else if(D>10)
    D=10;

    if(E<1)
    E=1;
    else if(E>10)
    E=10;

    // calculation of final score value.

    var score = parseInt( 200 + ( 100 * ( (A*35/100) + (B*30/100) + (C*15/100) + (D*10/100) + (E*10/100) ) ) );

    //end of calculations. From here, we assign classes and content to the score board.

    var scoreStatus = document.getElementById('score-status'); // the final score.
    var wordStatus = document.getElementById('word-status'); // the good, bad or average status of score.

    if(isNaN(score))
    {
        scoreStatus.setAttribute("class","");
        wordStatus.setAttribute("class","");
        scoreStatus.textContent = " invalid, please fill all inputs."; //assigning the score.
        wordStatus.textContent = "not a";
        scoreStatus.classList.add('final-score-invalid');
        wordStatus.classList.add('final-score-invalid');
    }

    else
    {
        scoreStatus.setAttribute("class","");
        wordStatus.setAttribute("class","");
        scoreStatus.textContent = score; //assigning the score.    

        if(score <= 535) //bad score.
        {
            scoreStatus.classList.add('final-score-bad');
            wordStatus.classList.add('final-score-bad');
            wordStatus.textContent = 'a bad';
        }
        
        else if(score > 535 && score <= 870) // average score. 
        {
            scoreStatus.classList.add('final-score-average');
            wordStatus.classList.add('final-score-average');
            wordStatus.textContent = 'an average';
        }
        
        else if(score > 870) // good score.
        {
            scoreStatus.classList.add('final-score-good');
            wordStatus.classList.add('final-score-good');
            wordStatus.textContent = 'a good';
        }
    
    }

    var jbflag = document.getElementById('flag'); //flag for warnings.

    if(flag == 0) // no warnings. 
    {
        jbflag.classList.add('noflag');
        jbflag.textContent = '';
    }
    else if(flag == 1) //level 1 warning. 
    {
        jbflag.classList.add('flag1');
        jbflag.textContent = 'Warning : Client may not be able to meet the repayment capacity as his total EMI is above 50% of their monthly salary';
    }
    else if(flag == 2) //level 2 warning.
    {
        jbflag.classList.add('flag2');
        jbflag.textContent = 'Warning : Client cannot meet the repayment capacity as his total expenditure per month is above their monthly salary';
    }


    var scoreBoard = document.getElementById('score-board'); //showing the scoreboard.
    scoreBoard.classList.remove('jbscore-hide');
    scoreBoard.classList.add('jbscore-show');
    
});