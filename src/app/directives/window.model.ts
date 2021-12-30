export class WindowProperties{
    private width: number=0;
    private height: number=0;
    public setWidth(value: number){
        this.width=value
    }
    public setHeight(value: number){
        this.height=value
    }
    public getWidth(){
        return this.width
    }
    public getHeight(){
        return this.height
    }
}