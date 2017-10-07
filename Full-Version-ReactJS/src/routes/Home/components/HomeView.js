import React from 'react'
import classes from './HomeView.scss'
import { RoutedComponent, connect } from './../../routedComponent'
import { Link } from 'react-router';

export class HomeView extends RoutedComponent {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <h1>Hello React</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra orci nunc, non commodo sapien iaculis id. Mauris ullamcorper libero quis fermentum auctor. Donec ut lacus nisl. Vivamus scelerisque erat consequat vestibulum porta. Fusce consectetur quam sapien, finibus blandit nulla iaculis eget. Nulla at arcu volutpat, aliquam magna iaculis, accumsan urna. Donec est libero, faucibus nec sem eget, faucibus mattis nisi. Ut lacus velit, tempus et massa id, auctor condimentum dui. Fusce eget venenatis arcu. Mauris accumsan nisl eget purus ultricies varius. Nulla nisl nisl, pulvinar non ex a, lobortis fringilla tortor. Suspendisse rutrum lorem at fermentum scelerisque. Phasellus non diam nec tortor fermentum lacinia vel eget massa. Integer eget mauris a elit eleifend gravida.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <h1>Hello React</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra orci nunc, non commodo sapien iaculis id. Mauris ullamcorper libero quis fermentum auctor. Donec ut lacus nisl. Vivamus scelerisque erat consequat vestibulum porta. Fusce consectetur quam sapien, finibus blandit nulla iaculis eget. Nulla at arcu volutpat, aliquam magna iaculis, accumsan urna. Donec est libero, faucibus nec sem eget, faucibus mattis nisi. Ut lacus velit, tempus et massa id, auctor condimentum dui. Fusce eget venenatis arcu. Mauris accumsan nisl eget purus ultricies varius. Nulla nisl nisl, pulvinar non ex a, lobortis fringilla tortor. Suspendisse rutrum lorem at fermentum scelerisque. Phasellus non diam nec tortor fermentum lacinia vel eget massa. Integer eget mauris a elit eleifend gravida.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <h1>Hello React</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra orci nunc, non commodo sapien iaculis id. Mauris ullamcorper libero quis fermentum auctor. Donec ut lacus nisl. Vivamus scelerisque erat consequat vestibulum porta. Fusce consectetur quam sapien, finibus blandit nulla iaculis eget. Nulla at arcu volutpat, aliquam magna iaculis, accumsan urna. Donec est libero, faucibus nec sem eget, faucibus mattis nisi. Ut lacus velit, tempus et massa id, auctor condimentum dui. Fusce eget venenatis arcu. Mauris accumsan nisl eget purus ultricies varius. Nulla nisl nisl, pulvinar non ex a, lobortis fringilla tortor. Suspendisse rutrum lorem at fermentum scelerisque. Phasellus non diam nec tortor fermentum lacinia vel eget massa. Integer eget mauris a elit eleifend gravida.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <h1>Hello React</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra orci nunc, non commodo sapien iaculis id. Mauris ullamcorper libero quis fermentum auctor. Donec ut lacus nisl. Vivamus scelerisque erat consequat vestibulum porta. Fusce consectetur quam sapien, finibus blandit nulla iaculis eget. Nulla at arcu volutpat, aliquam magna iaculis, accumsan urna. Donec est libero, faucibus nec sem eget, faucibus mattis nisi. Ut lacus velit, tempus et massa id, auctor condimentum dui. Fusce eget venenatis arcu. Mauris accumsan nisl eget purus ultricies varius. Nulla nisl nisl, pulvinar non ex a, lobortis fringilla tortor. Suspendisse rutrum lorem at fermentum scelerisque. Phasellus non diam nec tortor fermentum lacinia vel eget massa. Integer eget mauris a elit eleifend gravida.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(HomeView);
