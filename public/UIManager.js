var inputText = "";
var outputText = "Please submit a complete Terms and Conditions page.";

const CATEGORIES = {
  "Money & Commitment": ["auto-renew", "automatically renew", "non-refundable", "late fee", "cancellation fee", "free trial"],
  "Rights You Give Up": ["binding arbitration", "class action", "waive", "jury trial"],
  "Liability & Risk": ["indemnify", "hold harmless", "as is", "limitation of liability"],
  "Data & Content": ["perpetual", "irrevocable", "sublicense", "third parties", "affiliates"],
  "Control & Changes": ["sole discretion", "without notice", "terminate", "suspend", "reserve the right"],
};

function summarizeByCategory(text) {
    const sentences = text.split(/(?<=[.!?])\s+/);
    const summary = {};
    var text = "";

    for(const sentence of sentences) {
        const lower = sentence.toLowerCase();
        for(const [category, phrases] of Object.entries(CATEGORIES)) {
            if(phrases.some((p) => lower.includes(p))) {
                var subtext = "";
                if (summary[category] !== undefined) {
                    subtext = summary[category];
                    subtext += ", ";
                }
                else {
                    summary[category] = [];
                }
                subtext += sentence.trim();
                summary[category].push(subtext);
            }
        }
    }
    
    for(const [category, subtext] of Object.entries(summary)){
        text += category;
        text += ": ";
        text += subtext;
        //text += ".";
        text += "\n";
    }
    return text;
}


const summarize_button = document.getElementById('summarize_button');
if(summarize_button !== null){
    summarize_button.addEventListener('click', function(){
        inputText = document.getElementById('input-box').value;
        if(inputText !== ""){
            let temp = summarizeByCategory(inputText);
            if(temp !== ""){
                outputText = temp;
            }
        }
        document.getElementById('output-box').innerHTML = outputText;
    });
}

const clear_button = document.getElementById('clear_button');
if(clear_button !== null){
    clear_button.addEventListener('click', function(){
        document.getElementById('input-box').value = "";
        inputText = "";
    });
}

const why_button = document.getElementById('why_button');
if(why_button !== null){
    why_button.addEventListener('click', function(){
        window.location.href = '/why';
    });
}

const home_button = document.getElementById('home_button');
if(home_button !== null){
    home_button.addEventListener('click', function(){
        window.location.href = '/';
    });
}
