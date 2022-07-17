import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './product-detail.css'
import { useParams } from "react-router-dom";
import ProductDetailsView from "./product-detail-view";
import { useAppSelector } from "../../../hooks";
import { Container, Skeleton, Typography } from "@mui/material";

const ProductDetail: React.FC = () => {
  // const { productId } = useParams();
  // const dispatch = useDispatch();
  // const fetchData = async () => {
  //   const response: any = await axios
  //     .get(`http://localhost:5000/products/${productId}`)
  //     .catch((error) => {
  //       console.log("Error while fetching data : " + error);
  //     })
  //   dispatch(selectedProducts(response.data));
  // };
  // useEffect(() => {
  //   productId && fetchData();
  //   return () => {
  //     dispatch(removeSelectedProducts({}));
  //   };
  // }, [productId]);
  // console.log(productId);

  // const location = useLocation().pathname.split("/")[2];
  // const [detail, setDetail] = useState<any>([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/products/" + location)
  //     .then((res) => {
  //       setDetail(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [location]);
  // console.log(detail);

  const { productId } = useParams();
  const { products } = useAppSelector((state) => state.productsReducer);
  const product = products.filter(
    (product) => product._id === String(productId)
  )[0];
  if (product) {
    return <ProductDetailsView product={product} />;
  } else {
    return (
      <Container maxWidth="lg">
      <div className={"product"}>
        <div className={"productWrapper"}>
          <Skeleton variant="rectangular" width={500} height={500} />
          <div className={"productDescription"}>
            <Typography variant={"h1"} className={"productTitle"}>
              <Skeleton />
            </Typography>
            <div className={"productText"}>
              <Skeleton />
              <Skeleton />
            </div>
            <div className={"productPrice"}>
              <Skeleton />
            </div>
          </div>
        </div>
      </div>
      </Container>
    );
  }
};

export default ProductDetail;
