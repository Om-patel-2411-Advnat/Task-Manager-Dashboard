export default function NewProject(){
    return (
        <div>
            <form>
                <label htmlFor="title" >Title</label>
                <input type='text' name='title' required/>  
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
            </form>
        </div>
    )
}