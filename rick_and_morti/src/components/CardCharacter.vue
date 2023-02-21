<template>
    <div class="character">
        <img :src="character.image" :alt="character.name">
        <div class="character__info">
            <h3>{{ character.name }}</h3>
            <div class="status">
                <span :class="character.status == 'Alive' ? 'alive' :
                    character.status == 'Dead' ? 'dead' : 'default'">
                </span>
                <span>
                    {{ character.status }} - {{ character.species }}
                </span>
            </div>
            <div class="origin">
                <span>
                    Origin:
                    {{ character.origin.name }}
                </span>
            </div>
            <div class="location">
                <span>
                    Location:
                    {{ character.location.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['character'],
}
</script>

<style lang="scss">
.character {
    background-color: rgb(0, 0, 0);
    border-radius: 20px;
    box-shadow: 0 0 10px 1px black;
    overflow: hidden;
    cursor: pointer;
    transition: transform 200ms ease-in-out;
    height: 100%;

    &:hover {
        transform: scale(1.05);

        h3 {
            color: orange;
        }
    }

    span {
        color: rgb(255, 255, 255);
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    &__info {
        padding: 1.5rem;

        .status {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;

            span {
                color: rgb(255, 255, 255);

                &:first-child {
                    width: 10px;
                    height: 10px;
                    border-radius: 100%;
                    margin-right: 1rem;
                }
            }

            .alive {
                background-color: rgb(0, 255, 13);
                box-shadow: -1px 0px 8px 2px rgba(0, 255, 13);
                    -webkit-box-shadow: -1px 0px 8px 2px rgba(0, 255, 13);
                    -moz-box-shadow: -1px 0px 8px 2px rgba(0, 255, 13);
            }

            .dead {
                background-color: red;
                box-shadow: -1px 0px 8px 2px red;
                    -webkit-box-shadow: -1px 0px 8px 2px red;
                    -moz-box-shadow: -1px 0px 8px 2px red;
            }

            .default {
                background-color: white;
                box-shadow: -1px 0px 8px 2px white;
                    -webkit-box-shadow: -1px 0px 8px 2px white;
                    -moz-box-shadow: -1px 0px 8px 2px white;
            }

            .origin {
                margin-bottom: 0.5rem;
            }
        }
    }
}</style>