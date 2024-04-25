import React from 'react';
import announce from '../Image/istockphoto-1250478098-612x612.jpg'

function formatText(text) {
    const words = text.split(' ');
    const paragraphs = [];
    let currentParagraph = [];

    for (const word of words) {
        currentParagraph.push(word);
        if (currentParagraph.length >= 30 && word.endsWith('.')) {
            paragraphs.push(currentParagraph.join(' '));
            currentParagraph = [];
        }
    }

    if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph.join(' '));
    }

    return paragraphs;
}



function FormattedParagraphs({ textFromDatabase }) {
    const formattedParagraphs = formatText(textFromDatabase);

    return (
        <div className=''>
            <img src={announce} width={400}  className='float-start m-10'/>
            
            <h1 className='m-[10px]  text-dark-purple text-[30px]'>Student Welcome party</h1>
            {formattedParagraphs.map((paragraph, index) => (
                <div key={index}>
                <p  className='pt-[20px]'>{paragraph}</p>
                </div>
            ))}
        </div>
    );
}


function News() {
    const textFromDatabase = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
    return <FormattedParagraphs textFromDatabase={textFromDatabase} />;
}

export default News;
