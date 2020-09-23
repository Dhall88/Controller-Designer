$(() => {

    let $activeControl;
    let $digitalJoy = $("#digitalJoy"), $analogJoy1=$("#analogJoy1"), $analogJoy2=$("#analogJoy2"),
    $rt=$("#rt"), $rb=$("#rb"), $r3=$("#r3"), $lt=$("#lt"), $lb=$("#lb"), $l3=$("#l3"), $x=$("#x"),
    $y=$("#y"), $a=$("#a"), $b=$("#b"), $menu=$("#menu"),  $psXbox=$("#psXbox"),  $view=$("#view");
    let $document=$(document);
    let buttonData=[];
    let $controllerPos=$(".controller").position();

    let $axis1=$("#axis1"), $axis2=$("#axis2"), $axis4=$("#axis4");

    $axis1.click(() => {
        $menu.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $psXbox.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:70+$controllerPos.left});
        $view.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:120+$controllerPos.left});
        $digitalJoy.css({position: 'absolute'}).offset({top:20+$controllerPos.top,left:300+$controllerPos.left});
        $analogJoy1.css({position: 'absolute'}).offset({top:280+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy2.css({position: 'absolute'}).offset({top:280+$controllerPos.top,left:580+$controllerPos.left});
        $l3.css({position: 'absolute'}).offset({top:130+$controllerPos.top,left:20+$controllerPos.left});
        $r3.css({position: 'absolute'}).offset({top:130+$controllerPos.top,left:605+$controllerPos.left});
        $rt.css({position: 'absolute'}).offset({top:170+$controllerPos.top,left:470+$controllerPos.left});
        $rb.css({position: 'absolute'}).offset({top:265+$controllerPos.top,left:470+$controllerPos.left});
        $y.css({position: 'absolute'}).offset({top:170+$controllerPos.top,left:370+$controllerPos.left});
        $b.css({position: 'absolute'}).offset({top:265+$controllerPos.top,left:370+$controllerPos.left});
        $x.css({position: 'absolute'}).offset({top:170+$controllerPos.top,left:270+$controllerPos.left});
        $a.css({position: 'absolute'}).offset({top:265+$controllerPos.top,left:270+$controllerPos.left});
        $lt.css({position: 'absolute'}).offset({top:170+$controllerPos.top,left:170+$controllerPos.left});
        $lb.css({position: 'absolute'}).offset({top:265+$controllerPos.top,left:170+$controllerPos.left});
    })

    $axis2.click(() => {
        $menu.offset({top:20+$controllerPos.top,left:250+$controllerPos.left});
        $psXbox.offset({top:20+$controllerPos.top,left:325+$controllerPos.left});
        $view.offset({top:20+$controllerPos.top,left:400+$controllerPos.left});
        $digitalJoy.offset({top:20+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy1.offset({top:280+$controllerPos.top,left:125+$controllerPos.left});
        $analogJoy2.offset({top:280+$controllerPos.top,left:350+$controllerPos.left});
        $l3.offset({top:305+$controllerPos.top,left:20+$controllerPos.left});
        $r3.offset({top:305+$controllerPos.top,left:480+$controllerPos.left});
        $rt.offset({top:215+$controllerPos.top,left:460+$controllerPos.left});
        $rb.offset({top:180+$controllerPos.top,left:380+$controllerPos.left});
        $y.offset({top:70+$controllerPos.top,left:550+$controllerPos.left});
        $b.offset({top:100+$controllerPos.top,left:620+$controllerPos.left});
        $x.offset({top:100+$controllerPos.top,left:480+$controllerPos.left});
        $a.offset({top:150+$controllerPos.top,left:550+$controllerPos.left});
        $lt.offset({top:215+$controllerPos.top,left:40+$controllerPos.left});
        $lb.offset({top:180+$controllerPos.top,left:120+$controllerPos.left});
    })

    $axis4.click(() => {
        $menu.offset({top:20+$controllerPos.top,left:270+$controllerPos.left});
        $psXbox.offset({top:100+$controllerPos.top,left:270+$controllerPos.left});
        $view.offset({top:180+$controllerPos.top,left:270+$controllerPos.left});
        $digitalJoy.offset({top:30+$controllerPos.top,left:75+$controllerPos.left});
        $analogJoy1.offset({top:280+$controllerPos.top,left:20+$controllerPos.left});
        $analogJoy2.offset({top:280+$controllerPos.top,left:225+$controllerPos.left});
        $l3.offset({top:200+$controllerPos.top,left:400+$controllerPos.left});
        $r3.offset({top:200+$controllerPos.top,left:485+$controllerPos.left});
        $rt.offset({top:30+$controllerPos.top,left:605+$controllerPos.left});
        $rb.offset({top:120+$controllerPos.top,left:605+$controllerPos.left});
        $y.offset({top:30+$controllerPos.top,left:520+$controllerPos.left});
        $b.offset({top:120+$controllerPos.top,left:520+$controllerPos.left});
        $x.offset({top:30+$controllerPos.top,left:435+$controllerPos.left});
        $a.offset({top:120+$controllerPos.top,left:435+$controllerPos.left});
        $lt.offset({top:30+$controllerPos.top,left:350+$controllerPos.left});
        $lb.offset({top:120+$controllerPos.top,left:350+$controllerPos.left});
    })

    $document.mousedown((event)=>{
        console.log(event.target)

        if (!$(event.target).hasClass("control")){
            console.log("in first if")
            return;
        }

        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY, activePosition, mouseOffsetX, mouseOffsetY;
            $activeControl=$(event.target);
            activePosition=$activeControl.position();
            console.log(activePosition.left)
            $activeControl.css({position: 'absolute'})
        mouseOffsetX=event.pageX-activePosition.left;
        mouseOffsetY=event.pageY-activePosition.top;
        $document.mousemove((event)=>{
            console.log($activeControl)
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

    buildArray = () => {
        let $components=$(".control")
        let result= [];
        let $controllerPos=$(".controller").position();
        $.each($components, (index,element) => {
            let $element=$(element)
            result.push({xPos:$element.position().left-$controllerPos.left+37.5, yPos:$element.position().top-$controllerPos.top+37.5, id:$element.attr('id')})

        })
            if(result.length!==0) {
                $("li").remove();
            }
            result.forEach((element) => {
                $(".result").append(`<li>Button Type: ${element.id}, xCord: ${element.xPos}, yCord: ${element.yPos}</li>`)
            })
        };
});
