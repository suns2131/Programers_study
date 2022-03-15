/**
 *
 */

function solution(new_id) {
    var answer = '';
    //1단계
    new_id = new_id.toLowerCase()
    //2단계
    new_id = new_id.replace(/[^a-z0-9-_.]/gi,'')
    //3단계
    new_id = new_id.replace(/\.+/gi,'.')
    //4단계
    new_id = new_id.replace(/^\.|\.$/gi,'')
    //5단계
    new_id = new_id.length == 0?'a':new_id
    //6단계
    new_id = new_id.length > 15?new_id.slice(0,15):new_id
    new_id = new_id.replace(/\.$/gi,'')
    if(new_id.length <= 2)
    {
        while(new_id.length < 3)
        {
            let last_char = new_id.charAt(new_id.length-1);
            new_id += last_char;
        }
    }
    return new_id;
}