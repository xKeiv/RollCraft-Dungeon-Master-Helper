
function CreateNote() {
    return (
        <div>
            <textarea
                placeholder="Type your words~"
                cols={50}
                rows={5}
                maxLength={360}
                className="whitespace-pre-wrap bg-transparent border-none text-[#fff] resize-none text-lg"
                ></textarea>
            <div className="note_footer">
                <span className="label"> left</span>
                <button className="bg-transparent hover:bg-[#fff] hover:border hover:border-solid hover:border-[#fff] | duration-100 ease-in-out | border border-solid border-[#fff] rounded-xl | pt-1 pr-3 | text-sm | cursor-pointer">Save</button>
            </div>
        </div>
    )
}

export default CreateNote