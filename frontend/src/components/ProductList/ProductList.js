import React from "react";
import { Layout, Card, Button } from "antd";
import "./ProductList.less";
const { Sider, Content } = Layout;

export default class CategoryHeaderMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    state = {
        size: "large",
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };

    getCardItem(product) {
        const { size } = this.state;
        return (
            <Card
                title={product.name}
                bordered={true}
                hoverable
                className="card"
            >
                <img
                    className="product__image"
                    //src="feuerwehr-jacke-rot.jpg"
                    alt={product.name}
                ></img>
                <div className="product__attributes">
                    {product.description} <br />
                    <Button className="details__button" type="primary" shape="round" size={size}>
                        Details
                    </Button>
                </div>
            </Card>
            
        );
    }

    render() {
        return (
            <Layout>
                <Sider width={400} id="site-filter">
                    <p>Sebastian Filter</p>
                </Sider>
                <Content className="product-list__content">
                    {this.props.products.map((p) => this.getCardItem(p))}
                </Content>
            </Layout>
        );
    }
}
