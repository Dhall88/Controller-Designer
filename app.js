$(() => {

    let $activeControl;
    let controlId;
    let $joyStick1 = $("#joystick1");
    let $document=$(document);
    let buttonData=[];

    let controllerPos=$(".controller").position()

    $document.mousedown((event)=>{
        console.log(event.target);
        console.log(event.currentTarget)
        if (!$(event.target).hasClass("control")){
            return;
        }
        console.log("past first if")
        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY, activePosition, mouseOffsetX, mouseOffsetY;
        if($(event.target).hasClass("copy")) {
            console.log("insecond if")
            $activeControl=$(event.target);
            activePosition=$activeControl.position();
            console.log(`x ${activePosition.left}   y${activePosition.top}`)
        }
        else {
            $activeControl=$(event.target).clone().addClass("copy").appendTo(".container");
            $activeControl.css({top: lastY, left: lastX, position: 'absolute'})
            activePosition=$activeControl.position();
        }
        mouseOffsetX=event.pageX-activePosition.left;
        mouseOffsetY=event.pageY-activePosition.top;
        $document.mousemove((event)=>{
            console.log(mouseOffsetX)
            deltaX=lastX-event.pageX;
            deltaY=lastY-event.pageY;
            $activeControl.css({top: lastY+deltaY-mouseOffsetY, left: lastX+deltaX-mouseOffsetX})
            lastX=event.pageX;
            lastY=event.pageY;
        })
    })

    $document.mouseup((event)=> {
        if(event.pageX<30&&event.pageY<30) {
            $(event.target).remove();
        }
        console.log("in mouseup")
        $document.off("mousemove");
    })

    buildArray = () => {
        let $components=$(".copy")
        let result= [];
        let $controllerPos=$(".controller").position();
        $.each($components, (index,element) => {
            let $element=$(element)
            result.push({xPos:$element.position().left-$controllerPos.left, yPost:$element.position().top-$controllerPos.top, id:$element.attr('id')})

        })
            // console.log(element);
            // console.log($element)
            console.log(result)
        };
        // console.log($(result[1]).position());
        // console.log($(result[1]).attr('id'));

    
    
    // $joyStick1.mousedown(()=>{
    //     $activeControl=$joyStick1.clone()
    // });

    // $joyStick1.mouseup(()=>{
    //     $activeControl=null;
    // })



});
