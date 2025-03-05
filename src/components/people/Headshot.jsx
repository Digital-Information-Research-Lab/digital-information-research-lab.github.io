import styles from '../../css/people.module.css';

export default function Headshot({id, circle=false}) {
    return (
        <div className={`${styles.headshot} ${circle ? styles.circular : null}`}>
            <img src={require('@site/static/headshot/' + id + '.jpg').default} alt={id}/>
        </div>
    );
}