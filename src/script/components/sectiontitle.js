class SectionTitle extends HTMLElement {
    
    _shadowRoot = null
    _style = null

    _title = "Need Section Title"

    static get observedAttributes() {
        return ['title']
    }
    
    constructor() {
        super()

        this._shadowRoot = this.attachShadow({ mode: 'open'})
        this._style = document.createElement('style')

        this.render()
    }

    _updateStyle(){
        this._style.textContent=`
        :host {
            display: block;
        }
        
        .title-section {
            margin-block-end: 2rem;

            font-size: 1.2em;
        }
        `
    }

    _emptyContent(){
        this._shadowRoot.innerHTML=''
    }

    set title(value){
        this._title = value
    }

    get title(){
        return this._title
    }

    render(){
        this._emptyContent()
        this._updateStyle()

        this._shadowRoot.appendChild(this._style)
        this._shadowRoot.innerHTML += `
        <section id="club" class="club">
            <div class="title-section">
            <h2>${this.title}</h2>
            </div>

            <div>
            <slot></slot>
            </div>
        </section>
        `
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch (name) {
            case 'title':
                this._title = newValue
                break;
            }
        this.render()
    }
}

customElements.define('section-title', SectionTitle)