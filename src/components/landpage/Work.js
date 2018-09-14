import React, {Component} from 'react'
import './work.scss'
import Background from '../../data/waves/thumbnail.png'
import Link from 'gatsby-link'
import ProjectsData from '../../data/projects'
import Arrow from '../../../static/arrow_light.svg'
export default class Content extends Component {
  render(){
    return(
      <section id="work" className='work'>
        <div className="container">
          {
            ProjectsData.map((project, key) => (
              <Link  key={key} className="proj-div" to={`/${project.path}`}>
                <div className="proj-overlay"/>
                <div className="proj-see">
                  <img src={Arrow}/>
                  <h2>SEE PROJECT</h2>
                </div>
                <div className="proj-thumbnail-container">
                  <div className="proj-thumbnail" style={{backgroundImage: `url(${require(`../../data/${project.path}/thumbnail.png`)})`}}/>
                </div>
                <div className="proj-info">
                  <h2>{project.name}</h2>
                  <p>{`{${project.type}}`}</p>
                  <p>{project.des}</p>
                </div>
              </Link>
            ))
          }
        </div>
      </section>
    )
  }
}
