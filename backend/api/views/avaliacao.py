from rest_framework import viewsets
from api.models.avaliacao import Avaliacao
from api.serializers.avaliacao import AvaliacaoSerializer

class AvaliacaoViewSet(viewsets.ModelViewSet):
    queryset = Avaliacao.objects.all()
    serializer_class = AvaliacaoSerializer