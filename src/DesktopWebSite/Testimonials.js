import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Icon } from "@material-ui/core";
import './FlagsSelect.css';

const styles = theme => ({
    locationHelperText:{
      width: '80%',
      margin: '0 auto',
      padding: '20px',
      paddingBottom: '6vw',
      fontSize: '34px'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 240,
        width: 300,
        marginRight: 50,
        
    }
});


const testimonial = [
    {
        text: "The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: ",
        color: "#8FCECB",
        iconName: "format_quote",
        name: "Aniket bhage"
    },
    {
        text: "The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: ",
        color: "#EC706C",
        iconName: "format_quote",
        name: ""
    },
    {
        text: "The responsive grid focuses on consistent spacing widths, rather than column width. Material Design margins and columns follow an 8px square baseline grid. The spacing property is an integer between 0 and 10 inclusive. By default, the spacing between two grid items follows a linear function: ",
        color: "#E8DE45",
        iconName: "format_quote",
        name: ""
    }
] 


class Testimonals extends Component{
    render(){
        const { classes } = this.props;

        return(
            <div className="section-container" style={{marginBottom:70}}>
                <div className="section-heading">TESTIMONIALS
                </div>
                <div>
                    <Grid container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={2}>
                            {
                                testimonial.map(item => (
                                    <Paper key={item.color}  className='testimonials-box' style={{borderColor: item.color}}>
                                    <span><Icon style={{
                                        color:item.color
                                    }}>{ item.iconName }</Icon></span>
                                    <p className="testimonials-box-text">{ item.text }</p>
                                    <p className="testimonials-box-name">{ item.name }</p>
                                    </Paper>
                                ))
                            }
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Testimonals);