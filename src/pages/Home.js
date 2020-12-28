import React, { useState } from 'react';
import MapChart from '../components/MapChart';
import ReactTooltip from 'react-tooltip';
import useLoadData from '../hooks/useLoadData';
import useDateSlider from '../hooks/useDateSlider';
import { Slider, Button, Panel, Loader, Modal, ButtonToolbar } from 'rsuite';
import "rsuite/dist/styles/rsuite-default.min.css";
import useModal from '../hooks/useModal';
import isoToMonthDay from '../helpers/isoToMonthDay';

const Home = () => {
    const [data, isLoading, err, dateArray] = useLoadData();
    const [currentData, rangeValue, updateRangeValue, max, min] = useDateSlider(dateArray, data);
    const [content, setContent] = useState("");
    const [isShowing, open, close] = useModal();

    const domain = [0, 2, 4, 8, 16, 32, 64, 128];
    const range = ["#ffedea", "#ffcec5", "#ffad9f", "#ff8a75", "#ff5533", "#e2492d", "#be3d26", "#9a311f", "#782618"];

    if (isLoading || !currentData ) {
        return <Loader content="loading..." vertical center speed="slow" size="lg"/>
    }

    if (err) {
        return <h1 style={{color: "red"}}>An Error Occured while loading data, reload page to continue</h1>
    }

    return (
        <div className="" style={{height: "100%", width: "100%"}}>
            <h6 style={{width: "90vw", margin: "50px", maxWidth: "600px", marginBottom: "0px", marginTop: "15px"}}>Covid-19 Hospitalizations in California</h6>
            <ButtonToolbar style={{alignContent: "right"}}>
                <Button onClick={open}>About</Button>
            </ButtonToolbar>

            <Panel bordered style={{position: "relative", width: "90vw", height: "60vh", maxHeight: "600px", margin: "50px", padding: "0px", maxWidth: "600px", marginTop: "10px"}}>
                <div style={{width: "100%", height: "60vh", maxHeight: "600px", maxWidth: "600px"}}>
                    <MapChart data={currentData} setTooltipContent={setContent}/>
                    <ReactTooltip>{content}</ReactTooltip>
                </div>
                <div bordered className="legend" style={{position: "absolute", top: "10px", left: "10px", width: "125px", zIndex: 400}}>
                    <p style={{textAlign: "left", marginBottom: "5px"}}>Hospitalizations per 100k residents</p>
                    {domain.map((v, i) => (<div style={{color: "black", fontSize: 12, backgroundColor: range[i], width: "20px", height: "20px"}}><div style={{ width: "80px" }}>{v}</div></div>))}
                </div>
                <h6 style={{position: "absolute", top: "10px", right: "10px", width: "120px", zIndex: 400}}>
                    {isoToMonthDay(`${dateArray[rangeValue]}`)}
                </h6>
            </Panel>
            <div>
                <Slider style={{width: "90vw", margin: "50px", maxWidth: "600px"}} value={rangeValue} onChange={(v) => updateRangeValue(v)} min={min} max={max}/>
            </div>
            <Modal center size="xs" show={isShowing} onHide={close}>
                <Modal.Header>
                    <Modal.Title>Coivd 19 Severity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        This map is interactive. To view changes in data over time, select and move slider.
                        For more information about a specfic county, hover or click on the county.
                    </p>

                    <p>
                        For more information on <a href="https://www.stat.berkeley.edu/~yugroup/">The Yu Group's</a> Covid-19 research see: <a href="https://covidseverity.com/">Covid Severity</a>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={close} appearance="primary">
                        Ok
                    </Button>
                    <Button onClick={close} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Home;
