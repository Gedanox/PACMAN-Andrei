var keyboard = keyboard || {};
    keyboard = {
        keys:class{


            constructor(){
                this.converted=null;
                this.kiboard=null;
                this.word=document.getElementById("worddiv");
                this.rec=document.getElementById("submit");
                this.exists=null;
                this.temp=null;
                this.word=document.getElementById("worddiv");
                this.count=null;
            }

            setPath(path){
                return document.getElementById(path);
            }

            setForm(pathin, currentword){
                this.kiboard=this.setPath(pathin);
                this.rec.addEventListener("click", function(){
                    this.count=0;
                    for (var i = 0; i < currentword.length; i++) {
                        let temp = currentword.charAt(i);
                        if(currentword.charAt(i) == document.getElementById("input").value){
                            document.getElementById(currentword.charAt(i)).innerHTML=currentword.charAt(i);
                        }
                    }
                    this.exists=false;

                })
            }

            setKeyboard(pathin){
                this.kiboard=this.setPath(pathin);
                for(let i=0;i<26;i++){
                    this.converted = String.fromCharCode(i+65);
                    var di = document.createElement("div");
                    di.classList.add("key");
                    di.setAttribute('id',this.converted);
                    di.innerHTML=this.converted;
                    this.X.appendChild("");
                }
            }
        }
    }