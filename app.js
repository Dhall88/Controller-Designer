$(() => {

    let $digitalJoy = $("#digitalJoy"), $analogJoy1=$("#analogJoy1"), $analogJoy2=$("#analogJoy2"),
    $rt=$("#rt"), $rb=$("#rb"), $r3=$("#r3"), $lt=$("#lt"), $lb=$("#lb"), $l3=$("#l3"), $x=$("#x"),
    $y=$("#y"), $a=$("#a"), $b=$("#b"), $menu=$("#menu"),  $psXbox=$("#psXbox"),  $view=$("#view");
    let $document=$(document);
    let $controllerPos=$(".controller").position();

    let $axis1=$("#axis1"), $axis2=$("#axis2"), $axis4=$("#axis4");

    removeText = (element) => {
        $element=$(element);
        $element.removeClass("failed")
        $element.val("");
    }

    $axis1.click(() => {
        $menu.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $psXbox.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:120+$controllerPos.left});
        $view.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:220+$controllerPos.left});
        $digitalJoy.css({position: 'absolute'}).offset({top:40+$controllerPos.top,left:375+$controllerPos.left});
        $analogJoy1.css({position: 'absolute'}).offset({top:420+$controllerPos.top,left:10+$controllerPos.left});
        $analogJoy2.css({position: 'absolute'}).offset({top:420+$controllerPos.top,left:723+$controllerPos.left});
        $l3.css({position: 'absolute'}).offset({top:230+$controllerPos.top,left:30+$controllerPos.left});
        $r3.css({position: 'absolute'}).offset({top:230+$controllerPos.top,left:785+$controllerPos.left});
        $rt.css({position: 'absolute'}).offset({top:330+$controllerPos.top,left:585+$controllerPos.left});
        $rb.css({position: 'absolute'}).offset({top:450+$controllerPos.top,left:585+$controllerPos.left});
        $y.css({position: 'absolute'}).offset({top:330+$controllerPos.top,left:467.5+$controllerPos.left});
        $b.css({position: 'absolute'}).offset({top:450+$controllerPos.top,left:467.5+$controllerPos.left});
        $x.css({position: 'absolute'}).offset({top:330+$controllerPos.top,left:352.5+$controllerPos.left});
        $a.css({position: 'absolute'}).offset({top:450+$controllerPos.top,left:352.5+$controllerPos.left});
        $lt.css({position: 'absolute'}).offset({top:330+$controllerPos.top,left:235+$controllerPos.left});
        $lb.css({position: 'absolute'}).offset({top:450+$controllerPos.top,left:235+$controllerPos.left});
    })

    $axis2.click(() => {
        $menu.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:315+$controllerPos.left});
        $psXbox.css({position: 'absolute'}).css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:419.5+$controllerPos.left});
        $view.css({position: 'absolute'}).css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:530+$controllerPos.left});
        $digitalJoy.css({position: 'absolute'}).css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy1.css({position: 'absolute'}).css({position: 'absolute'}).offset({top:410+$controllerPos.top,left:140+$controllerPos.left});
        $analogJoy2.css({position: 'absolute'}).css({position: 'absolute'}).offset({top:410+$controllerPos.top,left:400+$controllerPos.left});
        $l3.css({position: 'absolute'}).offset({top:500+$controllerPos.top,left:10+$controllerPos.left});
        $r3.css({position: 'absolute'}).offset({top:500+$controllerPos.top,left:620+$controllerPos.left});
        $rt.css({position: 'absolute'}).offset({top:380+$controllerPos.top,left:600+$controllerPos.left});
        $rb.css({position: 'absolute'}).offset({top:290+$controllerPos.top,left:520+$controllerPos.left});
        $y.css({position: 'absolute'}).offset({top:185+$controllerPos.top,left:735+$controllerPos.left});
        $b.css({position: 'absolute'}).offset({top:280+$controllerPos.top,left:810+$controllerPos.left});
        $x.css({position: 'absolute'}).offset({top:230+$controllerPos.top,left:625+$controllerPos.left});
        $a.css({position: 'absolute'}).offset({top:320+$controllerPos.top,left:700+$controllerPos.left});
        $lt.css({position: 'absolute'}).offset({top:380+$controllerPos.top,left:30+$controllerPos.left});
        $lb.css({position: 'absolute'}).offset({top:290+$controllerPos.top,left:110+$controllerPos.left});
    })

    $axis4.click(() => {
        $menu.css({position: 'absolute'}).offset({top:50+$controllerPos.top,left:340+$controllerPos.left});
        $psXbox.css({position: 'absolute'}).offset({top:170+$controllerPos.top,left:340+$controllerPos.left});
        $view.css({position: 'absolute'}).offset({top:290+$controllerPos.top,left:340+$controllerPos.left});
        $digitalJoy.css({position: 'absolute'}).offset({top:50+$controllerPos.top,left:105+$controllerPos.left});
        $analogJoy1.css({position: 'absolute'}).offset({top:420+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy2.css({position: 'absolute'}).offset({top:420+$controllerPos.top,left:270+$controllerPos.left});
        $l3.css({position: 'absolute'}).offset({top:280+$controllerPos.top,left:525+$controllerPos.left});
        $r3.css({position: 'absolute'}).offset({top:280+$controllerPos.top,left:640+$controllerPos.left});
        $rt.css({position: 'absolute'}).offset({top:60+$controllerPos.top,left:800+$controllerPos.left});
        $rb.css({position: 'absolute'}).offset({top:180+$controllerPos.top,left:800+$controllerPos.left});
        $y.css({position: 'absolute'}).offset({top:60+$controllerPos.top,left:690+$controllerPos.left});
        $b.css({position: 'absolute'}).offset({top:180+$controllerPos.top,left:690+$controllerPos.left});
        $x.css({position: 'absolute'}).offset({top:60+$controllerPos.top,left:580+$controllerPos.left});
        $a.css({position: 'absolute'}).offset({top:180+$controllerPos.top,left:580+$controllerPos.left});
        $lt.css({position: 'absolute'}).offset({top:60+$controllerPos.top,left:470+$controllerPos.left});
        $lb.css({position: 'absolute'}).offset({top:180+$controllerPos.top,left:470+$controllerPos.left});
    })

    $document.mousedown((event)=>{

        if (!$(event.target).hasClass("control")){
            return;
        }

        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY, activePosition, mouseOffsetX, mouseOffsetY, $activeControl;
            $activeControl=$(event.target);
            activePosition=$activeControl.position();
            $activeControl.css({position: 'absolute'})
            mouseOffsetX=event.pageX-activePosition.left;
            mouseOffsetY=event.pageY-activePosition.top;
            $document.mousemove((event)=>{
            deltaX=lastX-event.pageX;
            deltaY=lastY-event.pageY;
            $activeControl.css({top: lastY+deltaY-mouseOffsetY, left: lastX+deltaX-mouseOffsetX})
            lastX=event.pageX;
            lastY=event.pageY;
            
        })
    })

    $document.mouseup((event)=> {
        $document.off("mousemove");
    })
    
    validate = (str, id) => {
        if(id==="email") {
            console.log("in email if")
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str)
        }
        else {
            return !!str
        }
    }

    sendDesign = () => {
        let $components=$(".control")
        let result= {};
        let $controllerPos=$(".controller").position();
        let $name = $("#name");
        let $email = $("#email")

        $.each($components, (index,element) => {
            let $element=$(element)
            let centerOffset=$element.width()/2;

            result[$element.attr('id')]=[(($element.position().left-$controllerPos.left+centerOffset)/3).toFixed(2),(($element.position().top-$controllerPos.top+centerOffset)/3).toFixed(2)]

        })

            result["name"] = $name.val();
            result["email"] = $email.val();
            let validEmail=validate(result["email"],"email");
            let validName = validate(result["name"],"name");

            if(!validName) {
                $name.val("name is required")
                $name.addClass("failed")
            } 
            
            if(!validEmail){
                if(!result["email"]){
                    $email.val("email is required")
                    $email.addClass("failed")
                } else {
                    $email.addClass("failed")
                }
            }
            
            if(validEmail && validName){
                $.ajax({
                    type: "POST",
                    url: "/index.php",
                    data: result
                    ,
                    success: function(){
                        console.log("Client Post success")
                    },
                    error: function(data){
                        console.log(data);
                    }
                    })
            } 
        }


});