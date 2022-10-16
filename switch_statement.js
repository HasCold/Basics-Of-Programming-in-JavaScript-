// switch statement

let day = +prompt("What is the day"); // Also put the + sign at the start of prompt function bc it takes the input only in string so we have to change the string in the number;
console.log(day);

switch (day) {
    case 0:
        console.log("Its Sunday");
        break;
        case 1:
            console.log("Its Monday");
            break;
            case 2:
                console.log("Its Tuesday");
                break;
            case 3:
                console.log("Its Wednesday");
                break;
                case 4:
                    console.log("Its Thursday");
                    break;
                    case 5:
                        console.log("Its Friday");
                        break;
                        case 6:
                            console.log("Its Saturday");
                            break;
    default:
        console.log("Invalid Day");
        break;
}