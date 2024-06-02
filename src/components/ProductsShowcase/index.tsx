import Image, { ImageProps } from "next/image";

import { colors } from "../../global.styles";
import { H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import { IntroWrapper, Product, ProductDetails, ProductImage, ProductsWrapper, StyledContainer } from "./styles";

interface IProduct {
	key: number;
	productDescription: string;
	productImage: ImageProps;
	productTitle: string;
	reversedOrder: boolean;
}

export interface IProductsShowcase {
	heading: string;
	products: IProduct[];
	subHeading: string;
}

export default function ProductsShowcase({ heading, products, subHeading }: IProductsShowcase) {
	return (
		<Section style={{ backgroundColor: colors.darkSection }}>
			<StyledContainer>
				<IntroWrapper>
					<H2 dangerouslySetInnerHTML={{ __html: heading }} />
					<Subtitle2>{subHeading}</Subtitle2>
				</IntroWrapper>
				<ProductsWrapper>
					{products.map((product) => (
						<Product $reverseOrder={product.reversedOrder} key={product.key}>
							<ProductImage $reverseImageMask={product.reversedOrder}>
								<Image
									alt={product.productImage.alt}
									className="product-image"
									height={362}
									src={product.productImage.src}
									width={483}
								/>
							</ProductImage>

							<ProductDetails>
								<Subtitle1>{product.productTitle}</Subtitle1>
								<Subtitle2>{product.productDescription}</Subtitle2>
							</ProductDetails>
						</Product>
					))}
				</ProductsWrapper>
			</StyledContainer>
		</Section>
	);
}
