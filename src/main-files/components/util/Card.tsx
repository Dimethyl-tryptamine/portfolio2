

const Card = ({ primaryColor, secondaryColor, className, content,backgroundimage }: {  primaryColor: string;  secondaryColor: string; className?: string; content: string; backgroundimage: string; }) => {



    return (
        <div className={`p-4 border-[.118rem] border-solid aspect-[1/1] w-[10rem] ${className}`}style={{backgroundColor: secondaryColor,backgroundImage: `url(${backgroundimage})`,  borderColor: primaryColor, }}>

        {content}

      </div>
    );
  };
  
  
export default Card;