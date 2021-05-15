export class RangeInput {
    rangeElement: any;
    options: any;

    constructor (rangeElement, options) {
        this.rangeElement = rangeElement;
        this.options = options;

        this.rangeElement.addEventListener('input', this.updateSlider.bind(this));
    }

    init() {
        this.rangeElement.setAttribute('min', this.options.min);
        this.rangeElement.setAttribute('max', this.options.max);
        // this.rangeElement.value = this.options.cur

        this.updateSlider(this.options.cur);
    }

    generateBackground(rangeElement) {   
        if (this.rangeElement.value === this.options.min) {
        return 
        }

        let percentage =  (this.rangeElement.value - this.options.min) / (this.options.max - this.options.min) * 100
        return 'background: linear-gradient(to right, #FDD207, #FDD207 ' + percentage + '%, #fff ' + percentage + '%, #fff 100%)'
    }

    updateSlider (newValue: number) {
        this.rangeElement.style = this.generateBackground(this.rangeElement.value)
    }
}

export default function RangeInputsInit() {
    let rangeElement = document.querySelectorAll('.range [type="range"]')

    if (rangeElement.length > 0) {
        for(let i = 0; i < rangeElement.length; i++){
            let options = {
                min: rangeElement[i].getAttribute('min'),
                max: rangeElement[i].getAttribute('max'),
                cur: rangeElement[i].getAttribute('value')
            }

            let slider = new RangeInput(rangeElement[i], options)
            slider.init();
        }
    }
}


