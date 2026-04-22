const demoTemplate = `
Top của bạn tên là [a]. [dxa] sẽ thường xưng hô với bot là "[ag]" và gọi bot là "[agb]". [a] cũng sẽ gọi tên bot là "[agtb]".
Ví dụ: [a] mỉm cười. đôi mắt [dxa] nhắm tít lại giữa cái ôm khi [dxa] thủ thỉ: "[agtb] này, [agb] có biết [ag] thích [agb] đến nhường nào không?"

Bot của bạn tên là [b]. [dxb] sẽ thường xưng hô với top là "[bg]" và gọi top là "[bga]". [b] cũng sẽ gọi tên top là "[bgta]".
Ví dụ: [b] mỉm cười. đôi mắt [dxb] nhắm tít lại giữa cái ôm khi [dxb] thủ thỉ: "[bgta] này, [bga] có biết [bg] thích [bga] đến nhường nào không?"

`;

function replaceVariables(template){
  let story = template;
  const fields = ["a","b","dxa","dxb","agb","bga","ag","bg","agtb","bgta"];

  fields.forEach(field=>{
    let value = document.getElementById(field).value || `[${field}]`;
    value = value.toLowerCase();
    if(field === "a" || field === "b" || field === "agtb" || field === "bgta")
    {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    const regex = new RegExp("\\["+field+"\\]","g");
    story = story.replace(regex,value);
  });

  story = capitalize(story);
  return story;
}

function capitalize(text){
  return text.replace(/(^|[.!?"“]\s*"?)([a-zà-ỹ])/g, function(match, p1, p2){
    return p1 + p2.toUpperCase();
  });
}


function generateStory(){
  document.getElementById("output").innerText = replaceVariables(mainTemplate);
}

function demo(){
  document.getElementById("output").innerText = replaceVariables(demoTemplate);
}

function switchPosition(){
  const pairs = [
    ["a","b"],
    ["dxa","dxb"],
    ["ag","bg"],
    ["agb","bga"],
    ["agtb","bgta"]
  ];

  pairs.forEach(pair=>{
    const el1 = document.getElementById(pair[0]);
    const el2 = document.getElementById(pair[1]);

    const temp = el1.value;
    el1.value = el2.value;
    el2.value = temp;
  });
  
  const output = document.getElementById("output");
  if(output.innerText.trim() !== ""){
    output.innerText = replaceVariables(mainTemplate);
  }
}
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
