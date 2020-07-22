$(() => {

    let $activeControl;
    let controlId;
    let $joyStick1 = $("#joystick1");
    let $document=$(document);
    let buttonData=[];

    $document.mousedown((event)=>{
        let deltaX, deltaY, lastX=event.pageX, lastY=event.pageY;
        $activeControl=$(event.target).clone().appendTo(".controller");
        $activeControl.css({top: 200, left: 200, position: 'absolute'})
        $document.mousemove((event)=>{
            deltaX=lastX-event.pageX;
            deltaY=lastY-event.pageY;
            // $activeControl.css
            lastX=event.pageX;
            lastY=event.pageY;
        })
    })
    
    $joyStick1.mousedown(()=>{
        $activeControl=$joyStick1.clone()
    });

    $joyStick1.mouseup(()=>{
        $activeControl=null;
    })



});
