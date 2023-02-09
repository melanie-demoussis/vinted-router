import { Link } from "react-router-dom";

const OfferCard = ({ offerInfos }) => {
  //   console.log("OfferCard");
  return (
    <Link to={`/offer/${offerInfos._id}`}>
      <article className="annonce">
        <div className="user">
          {offerInfos.owner.account.avatar && (
            <img
              src={offerInfos.owner.account.avatar.secure_url}
              alt="avatar"
            />
          )}
          <span>{offerInfos.owner.account.username}</span>
        </div>
        <div className="picture_container">
          <img src={offerInfos.product_image.secure_url} alt="annonce" />
          <p>{offerInfos.product_price} €</p>
          <div>
            {offerInfos.product_details.map((detail, index) => {
              if (detail.TAILLE) {
                return <p key={index}>{detail.TAILLE}</p>;
              } else if (detail.MARQUE) {
                return <p key={index}>{detail.MARQUE}</p>;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
