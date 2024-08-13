import React, { useState, useEffect, useRef } from 'react';
import { MdDeleteForever, MdEdit, MdClose } from 'react-icons/md';
import { FaStar, FaPaperclip } from 'react-icons/fa';

const Note = ({
    id, text, date, starred, handleDeleteNote, handleEditNote, handleStarNote, color, handleChangeColor, index, handleArchiveNote
}) => {
    const [animate, setAnimate] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);
    const [selectedColor, setSelectedColor] = useState(color);
    const [attachments, setAttachments] = useState([]);
    const fileInputRef = useRef(null); // Reference to the file input element

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleSaveEdit = () => {
        handleEditNote(id, editText);
        setIsEditing(false);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        handleChangeColor(id, color);
    };

    const handleAttachmentClick = () => {
        fileInputRef.current.click(); // Programmatically click the hidden file input
    };

    const handleAttachmentChange = (e) => {
        const files = Array.from(e.target.files);
        setAttachments((prev) => [...prev, ...files]);
    };

    const handleAttachmentDelete = (index) => {
        setAttachments((prev) => prev.filter((_, i) => i !== index));
    };

    const handleAttachmentView = (file) => {
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank'); // Open the file in a new tab
    };

    const handleDelete = () => {
        handleArchiveNote(id); // Call handleArchiveNote instead of handleDeleteNote
    };

    return (
        <div
            className={`note ${animate ? 'animate' : ''}`}
            style={{ backgroundColor: selectedColor, '--note-index': index }}
        >
            <div>
                {isEditing ? (
                    <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onBlur={handleSaveEdit}
                    />
                ) : (
                    <span>{text}</span>
                )}
            </div>

            {/* Display attachments under the text area */}
            {attachments.length > 0 && (
                <ul className="attachment-list">
                    {attachments.map((file, index) => (
                        <li key={index} className="attachment-item">
                            <span
                                className="attachment-name"
                                onClick={() => handleAttachmentView(file)}
                            >
                                {file.name}
                            </span>
                            <MdClose
                                className="delete-attachment-icon"
                                onClick={() => handleAttachmentDelete(index)}
                            />
                        </li>
                    ))}
                </ul>
            )}

            <div className="note-footer">
                <small>{date}</small>
                <div className="icons">
                    <FaPaperclip
                        className="attach-icon"
                        onClick={handleAttachmentClick} // Attach files when clicked
                    />
                    <FaStar
                        className="star-icon"
                        onClick={() => handleStarNote(id)}
                        style={{ color: starred ? '#e6b400' : 'white' }}
                    />
                    <MdEdit
                        className="edit-icon"
                        onClick={() => setIsEditing(!isEditing)}
                    />
                    <MdDeleteForever
                        className="delete-icon"
                        onClick={handleDelete} // Update to handleArchiveNote
                    />
                </div>
            </div>

            <input
                type="file"
                multiple
                ref={fileInputRef} // Assign the ref to the input element
                style={{ display: 'none' }} // Hide the input element
                onChange={handleAttachmentChange}
            />
        </div>
    );
};

export default Note;
