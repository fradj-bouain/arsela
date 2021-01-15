import React, { Component } from 'react'

import FormUser from './FormUser.js'


export default class simplePage2 extends Component {
    render() {
        return (
            <div>
               
                <h1 style={{ textAlign: "center"}}> Article 3 : Règles d’écriture d’un article d’enquête /de reportage </h1>
                <p style={{textAlign: "justify", margin:"20px"}}><span style={{fontFamily:"verdana ",fontWeight: "bold"}}>Écrire un article est un exercice particulier</span>. Il est indispensable de suivre quelques règles journalistiques
                afin d’écrire un bon article. Animés par le désir d’accrocher les lecteurs, les journalistes trouvent les
                images, affinent les formules, inventent les rythmes qui disent la vigueur de la langue d’aujourd’hui.</p>

                <p style={{textAlign: "justify", margin:"20px"}}><span style={{fontFamily:"verdana ",fontWeight: "bold"}}>Le sujet de l’article</span>. Il faut sélectionner une bonne information : avoir des témoignages, des
                chiffres fiables. Il faut pouvoir répondre aux cinq questions de référence : Qui, quand, comment,
                où, quoi, pourquoi… L’article doit apporter au lecteur des informations précises, des détails
                concrets qu’il tient de sources fiables. Il faut éviter les généralités que tout le monde connaît. Des
                informations concrètes, ce sont des descriptions précises de quelque chose qu’on a vue et qui
                existe vraiment. Ce sont aussi des citations (entre guillemets. Par exemple: Monsieur Alain est
                boulanger et aime son métier: “Je fais du pain depuis 20 ans et toujours avec le même bonheur...”)
                de personnes qu’on a rencontrées et interrogées. Ce sont enfin des INFORMATIONS précises. Il
                ne faut pas écrire: “Monsieur Alain a expliqué comment il fait son pain tous les jours” mais il faut
                écrire ce qu’il a dit: “Tous les matins, il allume son four (1) tout en chantant pour se réveiller et
                commencer la journée dans la bonne humeur (2). Puis il mélange sa farine avec de l’eau (3)...” Il y
                a là trois informations concrètes qui permettent au lecteur de bien savoir ce que fait monsieur Alain
                alors que si le journaliste écrit seulement: “Monsieur Alain a expliqué comment il fait son pain tous
                les jours”, le lecteur ne sait pas comment cela se passe.
                </p>

                <p style={{textAlign: "justify", margin:"20px"}}><span style={{fontFamily:"verdana ",fontWeight: "bold"}}>Le traitement de l’information</span>. Pour écrire un article intéressant, l’information brute ne suffit pas.
                Il faut analyser le contenu et le mettre en valeur par une écriture claire, précise et soignée. Le titre
                doit être soigneusement choisi et parlant. La première phrase doit donner envie de continuer et
                l’information doit se trouver au début de l’article. Utiliser les expressions, les images, les anecdotes
                les plus " parlantes ". Ne pas hésiter à rajouter une image (photo, caricature, schéma…) pour
                illustrer son propos. Privilégier une mise en page aérée. </p>

                <p style={{textAlign: "justify", margin:"20px"}}><span style={{fontFamily:"verdana ",fontWeight: "bold"}}>Le style de l’article</span>. Selon le sujet et la façon dont l’auteur veut l’aborder, on peut choisir un ton :
                ton clinique, distant, sensible, grave, léger, humoristique, pédagogique, solennel ou complice.
                Donner du rythme à votre article : utiliser des phrases courtes et incisives (sujet, verbe,
                compléments), choisir des mots simples et concrets. Les points et les virgules doivent apparaitre
                clairement et utiliser les mots de liaison (en effet, car, mais, pourtant, aussi, donc…). Privilégier les
                verbes actifs et le temps présent. L’article doit être clair, facile à comprendre… et c’est souvent
                difficile « de faire simple »
                </p>

                <p style={{textAlign: "justify", margin:"20px"}}><span style={{fontFamily:"verdana ",fontWeight: "bold"}}>Le plan</span>. Le plan doit être simple et logique. Le premier paragraphe est l’accroche : il donne en
                général l’information la plus importante (cela peut être une citation, une description de lieu, une
                anecdote). Les autres paragraphes doivent suivre cette règle simple : une idée importante par
                paragraphe et une succession logique entre tous les paragraphes. Il est donc important de sauter
                une ligne à chaque fin de partie, pour visualiser l’articulation de votre argumentaire.</p>
             <FormUser/>
            </div>
        )
    }
}
