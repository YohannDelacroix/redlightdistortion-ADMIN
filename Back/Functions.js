// Convert a month numeric value to a string value like "JAN" for January (01)
function convertMonthNtoS(monthNumeric){
    switch(monthNumeric){
        case '01':
            return "JAN";
        case '02':
            return "FEB";
        case '03':
            return "MAR";
        case '04':
            return "APR";
        case '05':
            return "MAY";
        case '06':
            return "JUN";
        case '07':
            return "JUL";
        case '08':
            return "AUG";
        case '09':
            return "SEP";
        case '10':
            return "OCT";
        case '11':
            return "NOV";
        case '12':
            return "DEC";
        default:
            console.log("convertMonthNtoS parameter is not a month")
    }
}

// Take a month in this format :"NOV" and return number in string : "11"
function convertMonthStoN(monthString){
    switch(monthString){
        case 'JAN':
            return "01";
        case 'FEB':
            return "02";
        case 'MAR':
            return "03";
        case 'APR':
            return "04";
        case 'MAY':
            return "05";
        case 'JUN':
            return "06";
        case 'JUL':
            return "07";
        case 'AUG':
            return "08";
        case 'SEP':
            return "09";
        case 'OCT':
            return "10";
        case 'NOV':
            return "11";
        case 'DEC':
            return "12";
        default:
            console.log("convertMonthStoN parameter is not a month")
    }
}


//Compare two dates, date1>date2 return 1 // date1==date2 return 0 // date1<date2 return -1
function compareTourDates(date1format, date2format){
    //Copy the values into new tables
    let date1 = {...date1format}
    let date2 = {...date2format}


    //Set the month to numeric value
    date1.month = convertMonthStoN(date1.month)
    date2.month = convertMonthStoN(date2.month)

    //Set all the fields to numeric value
    date1.day = Number(date1.day)
    date1.month = Number(date1.month)
    date1.year = Number(date1.year)
    date2.day = Number(date2.day)
    date2.month = Number(date2.month)
    date2.year = Number(date2.year)


    if(date1.year > date2.year){
        return 1
    }
    else if(date1.year < date2.year){
        return -1
    }
    else{ // ==
        if(date1.month > date2.month){
            return 1
        }
        else if(date1.month < date2.month){
            return -1
        }
        else{
            if(date1.day > date2.day){
                return 1
            }
            else if(date1.day < date2.day){
                return -1
            }
            else{
                return 0
            }
        }
    }
}

function sortTourDates(tourDates){
    let pass = 0
    let permut
    do{
        permut = false;
        for(let i = 0; i < tourDates.length-1-pass; i++){
            if(compareTourDates(tourDates[i], tourDates[i+1]) > 0)
            {
                let temp = tourDates[i];
                tourDates[i] = tourDates[i+1];
                tourDates[i+1] = temp;
                permut = true;
            }
        }        
        pass = pass + 1
    }while(permut == true)
   
    
    //console.log("TRI : " , tourDates)
}



module.exports = {convertMonthNtoS, convertMonthStoN,  sortTourDates, compareTourDates}