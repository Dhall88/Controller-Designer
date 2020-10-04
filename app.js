$(() => {

    let $digitalJoy = $("#digitalJoy"), $analogJoy1=$("#analogJoy1"), $analogJoy2=$("#analogJoy2"),
    $rt=$("#rt"), $rb=$("#rb"), $r3=$("#r3"), $lt=$("#lt"), $lb=$("#lb"), $l3=$("#l3"), $x=$("#x"),
    $y=$("#y"), $a=$("#a"), $b=$("#b"), $menu=$("#menu"),  $psXbox=$("#psXbox"),  $view=$("#view");

    let $document=$(document);

    let $controllerPos=$(".controller").position();

    let $axis1=$("#axis1"), $axis2=$("#axis2"), $axis4=$("#axis4");


    // Axis controller preset poisitions are defined here

    $axis1.click(() => {
        $menu.offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $psXbox.offset({top:20+$controllerPos.top,left:120+$controllerPos.left});
        $view.offset({top:20+$controllerPos.top,left:220+$controllerPos.left});
        $digitalJoy.offset({top:40+$controllerPos.top,left:375+$controllerPos.left});
        $analogJoy1.offset({top:420+$controllerPos.top,left:10+$controllerPos.left});
        $analogJoy2.offset({top:420+$controllerPos.top,left:723+$controllerPos.left});
        $l3.offset({top:230+$controllerPos.top,left:30+$controllerPos.left});
        $r3.offset({top:230+$controllerPos.top,left:785+$controllerPos.left});
        $rt.offset({top:330+$controllerPos.top,left:585+$controllerPos.left});
        $rb.offset({top:450+$controllerPos.top,left:585+$controllerPos.left});
        $y.offset({top:330+$controllerPos.top,left:467.5+$controllerPos.left});
        $b.offset({top:450+$controllerPos.top,left:467.5+$controllerPos.left});
        $x.offset({top:330+$controllerPos.top,left:352.5+$controllerPos.left});
        $a.offset({top:450+$controllerPos.top,left:352.5+$controllerPos.left});
        $lt.offset({top:330+$controllerPos.top,left:235+$controllerPos.left});
        $lb.offset({top:450+$controllerPos.top,left:235+$controllerPos.left});
    })

    $axis2.click(() => {
        $menu.offset({top:20+$controllerPos.top,left:315+$controllerPos.left});
        $psXbox.offset({top:20+$controllerPos.top,left:419.5+$controllerPos.left});
        $view.offset({top:20+$controllerPos.top,left:530+$controllerPos.left});
        $digitalJoy.offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy1.offset({top:410+$controllerPos.top,left:140+$controllerPos.left});
        $analogJoy2.offset({top:410+$controllerPos.top,left:400+$controllerPos.left});
        $l3.offset({top:500+$controllerPos.top,left:10+$controllerPos.left});
        $r3.offset({top:500+$controllerPos.top,left:620+$controllerPos.left});
        $rt.offset({top:380+$controllerPos.top,left:600+$controllerPos.left});
        $rb.offset({top:290+$controllerPos.top,left:520+$controllerPos.left});
        $y.offset({top:185+$controllerPos.top,left:735+$controllerPos.left});
        $b.offset({top:280+$controllerPos.top,left:810+$controllerPos.left});
        $x.offset({top:230+$controllerPos.top,left:625+$controllerPos.left});
        $a.offset({top:320+$controllerPos.top,left:700+$controllerPos.left});
        $lt.offset({top:380+$controllerPos.top,left:30+$controllerPos.left});
        $lb.offset({top:290+$controllerPos.top,left:110+$controllerPos.left});
    })

    $axis4.click(() => {
        $menu.offset({top:50+$controllerPos.top,left:340+$controllerPos.left});
        $psXbox.offset({top:170+$controllerPos.top,left:340+$controllerPos.left});
        $view.offset({top:290+$controllerPos.top,left:340+$controllerPos.left});
        $digitalJoy.offset({top:50+$controllerPos.top,left:105+$controllerPos.left});
        $analogJoy1.offset({top:420+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy2.offset({top:420+$controllerPos.top,left:270+$controllerPos.left});
        $l3.offset({top:280+$controllerPos.top,left:525+$controllerPos.left});
        $r3.offset({top:280+$controllerPos.top,left:640+$controllerPos.left});
        $rt.offset({top:60+$controllerPos.top,left:800+$controllerPos.left});
        $rb.offset({top:180+$controllerPos.top,left:800+$controllerPos.left});
        $y.offset({top:60+$controllerPos.top,left:690+$controllerPos.left});
        $b.offset({top:180+$controllerPos.top,left:690+$controllerPos.left});
        $x.offset({top:60+$controllerPos.top,left:580+$controllerPos.left});
        $a.offset({top:180+$controllerPos.top,left:580+$controllerPos.left});
        $lt.offset({top:60+$controllerPos.top,left:470+$controllerPos.left});
        $lb.offset({top:180+$controllerPos.top,left:470+$controllerPos.left});
    })

    // Mousedown handles smoothly moving controls around the screen

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

    // Validates email address and ensures that there is some text in for name field

    validate = (str, id) => {
        if(id==="email") {
            console.log("in email if")
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]/.test(str)
        }
        else {
            return !!str
        }
    }

    // removes text from input fields as well as red lettering

    removeText = (element) => {
        $element=$(element);
        $element.removeClass("failed")
        if($element.val()==="email is required") {

            $element.val("");
        }
    }
    
    // Posts design coords provided there is a valid name and email, added red lettering and border to input fields if either is invalid

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